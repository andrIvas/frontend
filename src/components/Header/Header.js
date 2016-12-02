import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="section-inner">
          <div className="header-logo_block">
            <Link className="header-logo" to="/"><span>КВА<span className="header-logo_r">Р</span>ТИРУМ</span></Link>
          </div>
          <Link className="mob-menu_btn openMobMenu" to="/" />
          <div className="main-menu_holder">
            <div className="user-menu">
              <Link className="user-menu_link" to="#"><span className="user-menu_icon" /><span>Вход</span></Link>
            </div>
            <ul className="main-menu">
              <li className="main-menu_item menuItem _dropdown-menu"><span className="gl_link">Квартиры</span>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="complexes.html">Новостройки</Link></li>
                  <li><Link className="gl_link" to="complexes_2.html">Вторичное жилье</Link></li>
                  <li><Link className="gl_link" to="objects.html">1-комнатные</Link></li>
                  <li><Link className="gl_link" to="objects_2.html">2-комнатные</Link></li>
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

export default withStyles(s)(Header);
