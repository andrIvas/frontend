import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, RouterContext, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';
import routes from './routes/routing';

let state = null;
if (window.$REDUX_STATE) {
  state = window.$REDUX_STATE;
}

const store = configureStore(state)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container'),
);

