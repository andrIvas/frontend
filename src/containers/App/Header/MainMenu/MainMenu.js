import React, { Component } from 'react';
import { Link } from 'react-router';
import DropdownMenu from './DropdowmMenu';


class MainMenu extends Component {
  render() {
    const dropdownMenu = 'main-menu_item menuItem _dropdown-menu';
    return (
      <ul className="main-menu">
        <DropdownMenu title="Квартиры">
          <li><Link className="gl_link" to="/complexes">Новостройки</Link></li>
          <li><Link className="gl_link" to="/complexes">Вторичное жилье</Link></li>
          <li><Link className="gl_link" to="/apartments">1-комнатные</Link></li>
          <li><Link className="gl_link" to="/apartments">2-комнатные</Link></li>
        </DropdownMenu>
        <DropdownMenu title="Новостройки">
          <li><Link className="gl_link" to="/companies">Все новостройки</Link></li>
          <li><Link className="gl_link" to="/companies">Москва</Link></li>
          <li><Link className="gl_link" to="/location">Московская область</Link></li>
        </DropdownMenu>
        <li className="main-menu_item menuItem"><Link className="gl_link" to="/companies">Компании</Link></li>
        <li className="main-menu_item menuItem"><Link className="gl_link" to="/">Полезное</Link></li>
      </ul>
    );
  }
}

export default MainMenu;
