import React, { Component, PropTypes } from 'react';
import SearchForm from './SearchForm';


class SectionBS extends Component {
  render() {
    return (
      <div className="hero_img sectionBS">
        <div className="hero_content">
          <div className="gl_table">
            <div className="gl_table_cell">
              <div className="section-inner">
                <div className="hero_title">Быстрый подбор любых вариантов квартир <br /> и другой недвижимости</div>
                <div className="hero_slogan mob_hidden">
                  То что вы ищете уже существует, осталось только ввести параметры для поиска
                </div>
                <SearchForm />
              </div>
            </div>
          </div>
          <div className="hero_scroll">
            <span>Как это работает?</span>
            <a className="gl_link scrollTo" href="#section_1"> </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionBS;
