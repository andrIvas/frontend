import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import {
  App,
  Home,
  Apartment,
  ApartmentList,
  Company,
  CompanyList,
  Complex,
  ComplexList,
  Location,
} from 'containers';

export default (store) => {

  return (
    <Route path="/" component={App}>
      <IndexRoute components={Home} />
      <Route path="apartments" components={ApartmentList} />
      <Route path="apartments/:id" components={Apartment} />
      <Route path="companies" components={CompanyList} />
      <Route path="companies/:id" components={Company} />
      <Route path="complexes" components={ComplexList} />
      <Route path="complexes/:id" components={Complex} />
      <Route path="location" components={Location} />
      <Redirect path="**" to="/" />
    </Route>
  );
};
