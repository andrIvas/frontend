import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Select } from 'components';
import { fetchLocations } from '../../redux/actions';

class SearchForm extends Component {
  static propTypes = {
    testAction: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('searchforms componentWillReceiveProps', nextProps);
  }

  handleSubmitForm = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <div className="hero_search">
        <form action="#" onSubmit={this.handleSubmitForm}>
          <div className="form-row">
            <div className="form-cell cell-s1 select-box-v1 select-multi-v1 _no-bdr">
              <Select multiSelect={true} value="wwwwwwwwwwwww">
                <li className="select2-results__option select2-results__option--highlighted" role="treeitem" aria-selected="false">1-комнатная квартира</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">2-комнатная квартира</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">3-комнатная квартира</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">Студия</li>
              </Select>
            </div>
            <div className="form-cell cell-s1 select-box-v1">
              <Select value="qqqqqqqqqqq">
                <div className="hero_search-range">
                  <div className="input_w" >
                    <label className="hero_search-range_label" onClick={this.props.testAction}>от</label>
                    <input
                      className="f_input input-v2 searchRangeVal"
                      data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                    />
                  </div>
                  <div className="input_w">
                    <label className="hero_search-range_label">до</label>
                    <input
                      className="f_input input-v2 searchRangeVal"
                      data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                    />
                  </div>
                </div>
              </Select>
            </div>
            <div className="form-cell cell-s2 select-box-v1 select-search-v1">
              <Select value="qqqqqqqqqqq" changeFilter={() => {}}>
                <li className="select2-results__option select2-results__option--highlighted" role="treeitem" aria-selected="true">Москва</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">Орел</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">Омск</li>
                <li className="select2-results__option" role="treeitem" aria-selected="false">Воронеж</li>
              </Select>
            </div>
            <div className="form-cell cell-s3">
              <Button>Подобрать</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(
  (state, ownProp) => ({ search: state.search }), {
    testAction: fetchLocations
  })(SearchForm);
