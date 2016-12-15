import React, { Component } from 'react';
import { Link } from 'react-router';
import SubMenu from './SubMenu';

class Menu extends Component {
  render() {
    return (
      <div className="footer-menu_holder">
        <ul className="main-menu">
          <SubMenu title="Квартиры" to="/apartments">
            <li><Link className="gl_link" to="/complexes">Новостройки</Link></li>
            <li><Link className="gl_link" to="/complexes">Вторичное жилье</Link></li>
            <li><Link className="gl_link" to="/apartments">1-комнатные</Link></li>
            <li><Link className="gl_link" to="/apartments">2-комнатные</Link></li>
          </SubMenu>
          <SubMenu title="Новостройки" to="/">
            <li><Link className="gl_link" to="/">Все новостройки</Link></li>
            <li><Link className="gl_link" to="/">Москва</Link></li>
            <li><Link className="gl_link" to="/">Московская область</Link></li>
          </SubMenu>
          <SubMenu title="Компании" to="/">
            <li><Link className="gl_link" to="/">Все компании</Link></li>
            <li><Link className="gl_link" to="/">Рейтинг компаний</Link></li>
            <li><Link className="gl_link" to="/">Лучшие 2016 года</Link></li>
          </SubMenu>
          <SubMenu title="Полезное" to="/">
            <li><Link className="gl_link" to="/">Иноформация</Link></li>
            <li><Link className="gl_link" to="/">Законы и акты</Link></li>
          </SubMenu>
        </ul>
      </div>
    );
  }
}

export default Menu;
