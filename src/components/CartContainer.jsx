import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class CartContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div >CartContainer</div>
    );
  }

}

export default connect((state, ownProps) => (state))(CartContainer);
