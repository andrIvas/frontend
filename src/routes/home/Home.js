import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="hero_img sectionBS">
        <img src="images/hero_1.jpg"/>
        <div className="hero_content">
          <div className="gl_table">
            <div className="gl_table_cell">
              <div className="section-inner">
                <div className="hero_title">Быстрый подбор любых вариантов квартир <br/> и другой недвижимости</div>
                <div className="hero_slogan mob_hidden">
                  То что вы ищете уже существует, осталось только ввести параметры для поиска
                </div>
                <div className="hero_search">
                  <form action="#">
                    <div className="form-row">
                      <div className="form-cell cell-s1 select-box-v1 select-multi-v1 _no-bdr">
                        <select className="typeSelect select2" data-dropdown-className="dropdown-v1"
                                data-close-on-select="false" multiple data-placeholder="Купить">
                          <option>1-комнатная квартира</option>
                          <option>2-комнатная квартира</option>
                          <option>3-комнатная квартира</option>
                          <option>Студия</option>
                        </select>
                      </div>
                      <div className="form-cell cell-s1 select-box-v1">
                        <div className="hero_search-price dropdown-control dropdown-v1 dropdownControl">
                          <div className="dropdown-val" id="range_val">Цена</div>
                          <div className="dropdown-block">
                            <div className="hero_search-range">
                              <div className="input_w">
                                <label className="hero_search-range_label">от</label>
                                <input className="f_input input-v2 searchRangeVal" id="range_start"
                                       data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "/>
                              </div>
                              <div className="input_w">
                                <label className="hero_search-range_label">до</label>
                                <input className="f_input input-v2 searchRangeVal" id="range_end"
                                       data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-cell cell-s2 select-box-v1 select-search-v1">
                        <div className="input_w">
                          <select className="select2" data-dropdown-className="dropdown-v1"
                                  data-placeholder="Город, район, название комплекса"
                                  data-minimum-results-for-search="0">
                            <option>Москва</option>
                            <option>Питер</option>
                            <option>Орел</option>
                            <option>Омск</option>
                            <option>Воронеж</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-cell cell-s3">
                        <button className="btn_v1 btn_blue hero_btn">Подобрать</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_scroll"><span>Как это работает?</span><a className="gl_link scrollTo" href="#section_1"/>
          </div>
        </div>
        <div className="main_content" id="section_1">
          <div className="features-list_holder">
            <ul className="features-list">
              <li>
                <div className="feature-unit">
                  <div className="feature-logo"><img src="images/feature_border.png"/>
                    <div className="feature-fraction fraction-v1">С&nbsp;мебелью</div>
                    <div className="feature-fraction fraction-v2">Остальные</div>
                    <div className="feature-icon"><img src="images/interior-sofa-chair.svg"/></div>
                  </div>
                  <p>Квартиры с мебелью продаются <br/> в 3 раза быстрее пустых</p>
                </div>
              </li>
              <li>
                <div className="feature-unit">
                  <div className="feature-logo"><img src="images/feature_border_2.png"/>
                    <div className="feature-fraction fraction-v3">Новостройки <br/> в&nbsp;других&nbsp;районах</div>
                    <div className="feature-fraction fraction-v2">Новостройки <br/> в промзонах</div>
                    <div className="feature-icon"><img src="images/building-apartment.svg"/></div>
                  </div>
                  <p>Новостройки в промзонах <br/> теряют в цене после ГК</p>
                </div>
              </li>
              <li>
                <div className="feature-unit">
                  <div className="feature-logo"><img src="images/feature_border.png"/>
                    <div className="feature-fraction fraction-v1">С мебелью</div>
                    <div className="feature-fraction fraction-v2">Остальные</div>
                    <div className="feature-icon"><img src="images/time-clock-hour.svg"/></div>
                  </div>
                  <p>Однокомнатные квартиры <br/> в 5 раз популярнее остальных</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(Home);
