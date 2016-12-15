import React, { Component } from 'react';
import { Link } from 'react-router';

class Copyright extends Component {
  render() {
    return (
      <div className="footer-copyright_holder">
        <div className="footer-copyright">2011—2016, kvartirium.ru <br /> - всё, что нужно знать о квартирах</div>
        <div className="footer-adds">По вопросам размещения  рекламы и сотрудничества с сайтом <br />
          обращайтесь в рекламный отдел:+7 (495) 432-43-22
        </div>
        <ul className="footer_counters">
          <li><img src="images/li_counter.png" alt="" /></li>
        </ul>
      </div>
    );
  }
}

export default Copyright;
