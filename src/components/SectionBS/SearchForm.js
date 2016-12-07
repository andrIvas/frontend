import React, { Component, PropTypes } from 'react';
// import {} from './SectionBS.scss';

class SearchForm extends Component {
  render() {
    return (
      <div className="hero_search">
        <form action="#">
          <div className="form-row">
            <div className="form-cell cell-s1 select-box-v1 select-multi-v1 _no-bdr">
              <select
                className="typeSelect select2" data-dropdown-class="dropdown-v1"
                data-close-on-select="false" multiple data-placeholder="Купить"
              >
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
                      <input
                        className="f_input input-v2 searchRangeVal" id="range_start"
                        data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                      />
                    </div>
                    <div className="input_w">
                      <label className="hero_search-range_label">до</label>
                      <input
                        className="f_input input-v2 searchRangeVal" id="range_end"
                        data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cell cell-s2 select-box-v1 select-search-v1">
              <div className="input_w">
                <select
                  className="select2" data-dropdown-className="dropdown-v1"
                  data-placeholder="Город, район, название комплекса" data-minimum-results-for-search="0"
                >
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
    );
  }
}


export default SearchForm;
