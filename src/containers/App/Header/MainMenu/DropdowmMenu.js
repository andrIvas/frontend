import React, { Component, PropTypes } from 'react';


class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired
  };
  state = {};

  handleOnMouseOver = () => {
    this.setState({ show: true });
  };
  handleOnMouseLeave = () => {
    this.setState({ show: false });
  };

  render() {
    const { children, title } = this.props;
    const { show } = this.state;
    const dropdownMenu = `main-menu_item menuItem _dropdown-menu ${show ? 'hovered' : ''}`;
    return (
      <li
        className={dropdownMenu}
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
      ><span className="gl_link">{title}</span>
        <ul className="main-menu_sub-menu">
          {children}
        </ul>
      </li>
    );
  }
}

export default DropdownMenu;
