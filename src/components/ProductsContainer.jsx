import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsList from './ProductsList.jsx';
import * as ShopActions from '../actions/ShopActions';

class ProductsContainer extends Component {

  // props contains dispatch fn and all reducers, passed in by @connect
  // dispatch: function
  // products: Record
  // carts: Record
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div >
        ProductsContainer
      </div>
    );
  }

}
;

export default connect((state, ownProps) => ({ products: state.products }))(ProductsContainer);
