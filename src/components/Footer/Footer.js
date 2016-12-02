import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="section-inner">
          <div className="footer-about_block">
            <div className="footer-about mob_hidden">Квартириум - это самый удобный способ поиска недвижимости по точному адресу или по карте, с учётом всех интересующих вас параметров.</div>
            <ul className="footer-about_menu">
              <li><Link className="gl_link" to="#">О проекте</Link></li>
              <li><Link className="gl_link" to="#">Реклама</Link></li>
              <li><Link className="gl_link" to="#">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-menu_holder">
            <ul className="main-menu">
              <li className="main-menu_item menuItem"><Link className="gl_link" to="#">Квартиры</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="#">Новостройки</Link></li>
                  <li><Link className="gl_link" to="#">Вторичное жилье</Link></li>
                  <li><Link className="gl_link" to="#">1-комнатные</Link></li>
                  <li><Link className="gl_link" to="#">2-комнатные</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="#">Новостройки</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="#">Все новостройки</Link></li>
                  <li><Link className="gl_link" to="#">Москва</Link></li>
                  <li><Link className="gl_link" to="#">Московская область</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="#">Компании</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="#">Все компании</Link></li>
                  <li><Link className="gl_link" to="#">Рейтинг компаний</Link></li>
                  <li><Link className="gl_link" to="#">Лучшие 2016 года</Link></li>
                </ul>
              </li>
              <li className="main-menu_item menuItem"><Link className="gl_link" to="#">Полезное</Link>
                <ul className="main-menu_sub-menu">
                  <li><Link className="gl_link" to="#">Иноформация</Link></li>
                  <li><Link className="gl_link" to="#">Законы и акты</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-copyright_holder">
            <div className="footer-copyright">2011—2016, kvartirium.ru <br /> - всё, что нужно знать о квартирах</div>
            <div className="footer-adds">По вопросам размещения  рекламы и сотрудничества с сайтом <br />  обращайтесь в рекламный отдел:+7 (495) 432-43-22</div>
            <ul className="footer_counters">
              <li><img src="images/li_counter.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
