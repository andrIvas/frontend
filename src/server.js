import 'babel-polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import PrettyError from 'pretty-error';


import Html from './components/Html';
import combinedReducers from './reducers';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.scss';
import routes from './routes/routing';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port } from './config';

const finalCreateStore = applyMiddleware()(createStore);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') {
  app.enable('trust proxy');
}

app.get('*', async (req, res, next) => {
  try {
    const css = new Set();
    const context = {
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
    };

    const store = finalCreateStore(combinedReducers);
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
          const data = {};
          data.children = ReactDOM.renderToString((
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          ));
          data.state = JSON.stringify(store.getState());
          data.style = [...css].join('');
          data.scripts = []
          const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
          res.status(200);
          res.send(`<!doctype html>${html}`);
          // console.log('\ndata:\n', data);
          // console.log('\nhtml:\n', html);
        })
        .then(page => res.status(200).send(page))
        .catch(err => res.end(err.message));
    });
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
