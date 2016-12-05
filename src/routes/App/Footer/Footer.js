import React, { Component } from 'react';
import { Link } from 'react-router';
import url from '../../url';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="section-inner">
          <div className="footer-about_block">
            <div className="footer-about mob_hidden">
              Квартириум - это самый удобный способ поиска недвижимости по точному адресу или по карте, с учётом всех интересующих вас параметров.
            </div>
            <ul className="footer-about_menu">
              <li><Link className="gl_link" to={url.home}>О проекте</Link></li>
              <li><Link className="gl_link" to={url.home}>Реклама</Link></li>
              <li><Link className="gl_link" to={url.home}>Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-menu_holder">
            <ul className="main-menu">
              <li className="main-menu_item menuItem"><Link className="gl_link" to={url.apartments}>Квартиры</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to={url.newBuilding}>Новостройки</Link></li>
                  <li><Link className="gl_link" to={url.resellers}>Вторичное жилье</Link></li>
                  <li><Link className="gl_link" to={url.apartments}>1-комнатные</Link></li>
                  <li><Link className="gl_link" to={url.apartments}>2-комнатные</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to={url.home}>Новостройки</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to={url.home}>Все новостройки</Link></li>
                  <li><Link className="gl_link" to={url.home}>Москва</Link></li>
                  <li><Link className="gl_link" to={url.home}>Московская область</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to={url.home}>Компании</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to={url.home}>Все компании</Link></li>
                  <li><Link className="gl_link" to={url.home}>Рейтинг компаний</Link></li>
                  <li><Link className="gl_link" to={url.home}>Лучшие 2016 года</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to={url.home}>Полезное</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to={url.home}>Иноформация</Link></li>
                  <li><Link className="gl_link" to={url.home}>Законы и акты</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-copyright_holder">
            <div className="footer-copyright">2011—2016, kvartirium.ru <br /> - всё, что нужно знать о квартирах</div>
            <div className="footer-adds">По вопросам размещения  рекламы и сотрудничества с сайтом <br />
              обращайтесь в рекламный отдел:+7 (495) 432-43-22
            </div>
            <ul className="footer_counters">
              <li><img src="images/li_counter.png" alt=""/></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
