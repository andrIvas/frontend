import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="footer-about_block">
        <div className="footer-about mob_hidden">
          Квартириум - это самый удобный способ поиска недвижимости по точному адресу или по карте, с учётом всех интересующих вас параметров.
        </div>
        <ul className="footer-about_menu">
          <li><Link className="gl_link" to="/">О проекте</Link></li>
          <li><Link className="gl_link" to="/">Реклама</Link></li>
          <li><Link className="gl_link" to="/">Контакты</Link></li>
        </ul>
      </div>
    );
  }
}

export default About;
