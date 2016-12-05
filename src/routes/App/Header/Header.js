import React, { Component } from 'react';
import { Link } from 'react-router';
import url from '../../url';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="section-inner">
          <div className="header-logo_block">
            <Link className="header-logo" to={url.home}><span>КВА<span className="header-logo_r">Р</span>ТИРУМ</span></Link>
          </div>
          <a className="mob-menu_btn openMobMenu" href="#" />
          <div className="main-menu_holder">
            <div className="user-menu">
              <Link className="user-menu_link" to={url.login}><span className="user-menu_icon" /><span>Вход</span></Link>
            </div>
            <ul className="main-menu">
              <li className="main-menu_item menuItem _dropdown-menu"><span className="gl_link">Квартиры</span>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to={url.newBuilding}>Новостройки</Link></li>
                  <li><Link className="gl_link" to={url.resellers}>Вторичное жилье</Link></li>
                  <li><Link className="gl_link" to={url.apartments}>1-комнатные</Link></li>
                  <li><Link className="gl_link" to={url.apartments}>2-комнатные</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem _dropdown-menu"><span className="gl_link">Новостройки</span>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="rate.html">Все новостройки</Link></li>
                  <li><Link className="gl_link" to="location.html">Москва</Link></li>
                  <li><Link className="gl_link" to="card.html">Московская область</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="companies.html">Компании</Link></li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="company.html">Полезное</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
