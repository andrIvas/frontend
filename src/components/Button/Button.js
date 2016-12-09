import React, { Component, PropTypes } from 'react';


class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    return (
      <button className="btn_v1 btn_blue hero_btn">{this.props.children}</button>
    );
  }
}


export default Button;

