import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, RouterContext, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../common/utils/configureStore';
import { ProductState, ProductRecord, convertMapToImmutable } from '../common/constants/Types';
import routes from '../common/routes/routing';

let state = null;
if (window.$REDUX_STATE) {
  state = window.$REDUX_STATE;

  // begin marshalling data into Immutable types
  state.products = new ProductState({
    $fetched: document.location.pathname === '/',
    productsById: convertMapToImmutable(state.products.productsById, ProductRecord),
    total: state.products.total,
  });
}

const store = configureStore(state)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container'),
);

