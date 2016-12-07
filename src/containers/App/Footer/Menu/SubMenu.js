import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SubMenu extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  render() {
    const { children, title, to } = this.props;
    return (
      <li className="main-menu_item menuItem">
        <Link className="gl_link" to={to}>{title}</Link>
        <ul className="main-menu_sub-menu">
          {children}
        </ul>
      </li>
    );
  }
}

export default SubMenu;
