import React, { Component } from 'react';
import Logo from './Logo';
import UserLogin from './UserLogin';
import MainMenu from './MainMenu/MainMenu';


class Header extends Component {

  state = { openMenu: false };

  handleOnClick = () => {
    const { openMenu } = this.state;
    this.setState({ openMenu: !openMenu });
  };

  render() {
    const { openMenu } = this.state;
    const openMenuClass = `header ${openMenu ? 'icon_close menu_opened' : ''}`;
    return (
      <div className={openMenuClass}>
        <div className="section-inner">
          <Logo />
          <a className="mob-menu_btn openMobMenu" onClick={this.handleOnClick} > </a>
          <div className="main-menu_holder">
            <UserLogin />
            <MainMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
