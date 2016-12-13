import React, { Component, PropTypes } from 'react';


class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <button className="btn_v1 btn_blue hero_btn" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}


export default Button;

