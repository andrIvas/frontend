import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './App';
import Home from './Home';
import Apartments from './Apartments';
import NewBuilding from './NewBuilding';
import Resellers from './Resellers';
import url from './url';

export default (

  <Route component={App}>
    <Route path={url.home} components={Home} />
    <Route path={url.apartments} components={Apartments} />
    <Route path={url.newBuilding} components={NewBuilding} />
    <Route path={url.resellers} components={Resellers} />
    <Redirect path="*" to="/" />
  </Route>
);
