import React, { Component, PropTypes } from 'react';
import DevTools from '../routes/App/DevTools';


export default class TodoApp extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {

    let tool = ( 'undefined' !== typeof window && true == window.$REDUX_DEVTOOL ) ? <DevTools /> : null;

    return (
      <div>
        {this.props.children}
        {tool}
      </div>
    );
  }

}
