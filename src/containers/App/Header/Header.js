import React, { Component } from 'react';
import { Link } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="section-inner">
          <div className="header-logo_block">
            <Link className="header-logo" to="/"><span>КВА<span className="header-logo_r">Р</span>ТИРУМ</span></Link>
          </div>
          <span className="mob-menu_btn openMobMenu" />
          <div className="main-menu_holder">
            <div className="user-menu">
              <Link className="user-menu_link" to="/"><span className="user-menu_icon" /><span>Вход</span></Link>
            </div>
            <ul className="main-menu">
              <li className="main-menu_item menuItem _dropdown-menu"><span className="gl_link">Квартиры</span>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="/complexes">Новостройки</Link></li>
                  <li><Link className="gl_link" to="/complexes">Вторичное жилье</Link></li>
                  <li><Link className="gl_link" to="/apartments">1-комнатные</Link></li>
                  <li><Link className="gl_link" to="/apartments">2-комнатные</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem _dropdown-menu"><span className="gl_link">Новостройки</span>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="/companies">Все новостройки</Link></li>
                  <li><Link className="gl_link" to="/companies">Москва</Link></li>
                  <li><Link className="gl_link" to="/location">Московская область</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="/companies">Компании</Link></li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="/">Полезное</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
