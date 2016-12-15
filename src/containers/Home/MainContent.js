import React, { Component, PropTypes } from 'react';


class MainContent extends Component {
  render() {
    return (
      <div className="main_content" id="section_1">
        <div className="features-list_holder">
          <ul className="features-list">
            <li>
              <div className="feature-unit">
                <div className="feature-logo">
                  <img src="/images/feature_border.png" role="presentation" />
                  <div className="feature-fraction fraction-v1">С&nbsp;мебелью</div>
                  <div className="feature-fraction fraction-v2">Остальные</div>
                  <div className="feature-icon">
                    <img src="/images/interior-sofa-chair.svg" role="presentation" />
                  </div>
                </div>
                <p>Квартиры с мебелью продаются <br /> в 3 раза быстрее пустых</p>
              </div>
            </li>
            <li>
              <div className="feature-unit">
                <div className="feature-logo">
                  <img src="/images/feature_border_2.png" role="presentation" />
                  <div className="feature-fraction fraction-v3">Новостройки <br /> в&nbsp;других&nbsp;районах</div>
                  <div className="feature-fraction fraction-v2">Новостройки <br /> в промзонах</div>
                  <div className="feature-icon">
                    <img src="/images/building-apartment.svg" role="presentation" />
                  </div>
                </div>
                <p>Новостройки в промзонах <br /> теряют в цене после ГК</p>
              </div>
            </li>
            <li>
              <div className="feature-unit">
                <div className="feature-logo">
                  <img src="/images/feature_border.png" role="presentation" />
                  <div className="feature-fraction fraction-v1">С мебелью</div>
                  <div className="feature-fraction fraction-v2">Остальные</div>
                  <div className="feature-icon">
                    <img src="images/time-clock-hour.svg" role="presentation" />
                  </div>
                </div>
                <p>Однокомнатные квартиры <br /> в 5 раз популярнее остальных</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContent;

