import 'babel-polyfill';
import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from '../routes/routing';
import promiseMiddleware from '../middlewares/PromiseMiddleware';
import combinedReducers from '../common/reducers';
import fetchComponentData from '../utils/fetchComponentData';

const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);

console.log('env: ', process.env.NODE_ENV);

const app = express();

app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// initialize webpack HMR
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../tools/webpack.config');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

if (process.env.NODE_ENV !== 'production') {
  app.enable('trust proxy');
}

// server rendering
app.use((req, res, next) => {
  const store = finalCreateStore(combinedReducers);

  // react-router
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps == null) {
      return res.status(404).send('Not found');
    }
    // return fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
    return Promise.resolve()

      .then(() => {
        const initView = renderToString((
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ));

        console.log('\ninitView:\n', initView);

        const state = JSON.stringify(store.getState());
        console.log( '\nstate: ', state )

        const page = renderFullPage(initView, state);
        console.log( '\npage:\n', page );

        return page;
      })

      .then(page => res.status(200).send(page))

      .catch(err => res.end(err.message));
  });
});


function renderFullPage(html, initialState) {
  return `
	<!doctype html>
	<html lang="utf-8">
	  <head>
		<title>Universal Redux Example</title>
		<link rel="shortcut icon" type="image/png" href="assets/images/react.png">
		<link rel="stylesheet" href="/assets/css/uikit.almost-flat.min.css">
	  </head>
	  <body>
	  <div class="container">${html}</div>
		<script>window.$REDUX_STATE = ${initialState}</script>
		<script src="/static/bundle.js"></script>
	  </body>
	</html>
	`;
}

// example of handling 404 pages
app.get('*', (req, res) => {
  res.status(404).send('Server.js > 404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) => {
  console.error('Error on request %s %s', req.method, req.url);
  console.error(err.stack);
  res.status(500).send('Server error');
});

process.on('uncaughtException', evt => {
  console.log('uncaughtException: ', evt);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

