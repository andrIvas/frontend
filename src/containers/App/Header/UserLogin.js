import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from './Logo';


class UserLogin extends Component {
  render() {
    return (
      <div className="user-menu">
        <Link className="user-menu_link" to="/"><span className="user-menu_icon" /><span>Вход</span></Link>
      </div>
    );
  }
}

export default UserLogin;
