import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Select, SelectRow } from 'components';
import { fetchSearch, fetchLocations } from '../../redux/actions';

class SearchForm extends Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    fetchLocations: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.setState({
      apartments: [],
      price: {}
    });
    this.props.fetchLocations();
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ ...{ location: nextProps.filters.locations && nextProps.filters.locations[0] }, ...nextProps.search, ...this.state });
  }

  handleSubmitForm = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.props.fetchSearch(this.state);
  };
  handleApartmentsSelect = (apartment, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const apartmentList = this.state.apartments.slice();
    if (apartmentList[apartment.id]) {
      delete apartmentList[apartment.id];
    } else {
      apartmentList[apartment.id] = apartment;
    }
    this.setState({ apartments: apartmentList });
  };

  handleLocationSelect = (location) => {
    this.setState({ location });
  };

  handleLocationFilterChange = (locationFilterStr) => {
    this.setState({ locationFilterStr });
  };
  handlePrice = () => {
    const min = this.minPrice.value;
    const max = this.maxPrice.value;
    this.setState({ price: { min, max } });
  };

  priceFormat(price) {
    let str = '';
    if (price.min) {
      str += `от ${price.min}`;
    }
    if (price.max) {
      str += ` до ${price.max}`;
    }
    return str;
  }

  render() {
    const { filters } = this.props;
    const { location, locationFilterStr, apartments, price } = this.state;
    return (
      <div className="hero_search">
        <form action="#" onSubmit={this.handleSubmitForm}>
          <div className="form-row">
            <div className="form-cell cell-s1 select-box-v1 select-multi-v1 _no-bdr">
              <Select multiSelect={true} value={apartments.filter(a => !!a).map(a => a.name).join(',')}>
                {filters.apartments
                  .map(apart =>
                    <SelectRow
                      key={apart.id}
                      {...apart}
                      current={Boolean(apartments[apart.id])}
                      onSelect={this.handleApartmentsSelect}
                    />
                  )}
              </Select>
            </div>
            <div className="form-cell cell-s1 select-box-v1">
              <Select value={this.priceFormat(price)}>
                <div className="hero_search-range" onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                >
                  <div className="input_w" >
                    <label className="hero_search-range_label">от</label>
                    <input
                      ref={(c) => this.minPrice = c}
                      className="f_input input-v2 searchRangeVal"
                      type="number"
                      onChange={this.handlePrice}
                      data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                    />
                  </div>
                  <div className="input_w">
                    <label className="hero_search-range_label">до</label>
                    <input
                      className="f_input input-v2 searchRangeVal"
                      ref={(c) => this.maxPrice = c}
                      type="number"
                      onChange={this.handlePrice}
                      data-inputmask="'alias': 'decimal', 'groupSeparator': ' ', 'digitsOptional': true, 'autoGroup': true, 'rightAlign': false "
                    />
                  </div>
                </div>
              </Select>
            </div>
            <div className="form-cell cell-s2 select-box-v1 select-search-v1">
              <Select value={location && location.name} changeFilter={this.handleLocationFilterChange}>
                {filters.locations
                  .filter(loc => locationFilterStr ? loc.name.toLowerCase().includes(locationFilterStr) : true)
                  .map(loc =>
                  <SelectRow
                    key={loc.id}
                    onSelect={this.handleLocationSelect}
                    current={Boolean(location && loc.id === location.id)}
                    {...loc}
                  />
                )}
              </Select>
            </div>
            <div className="form-cell cell-s3">
              <Button onClick={this.handleSubmitForm}>Подобрать</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(
  (state, ownProp) => ({
    filters: state.search.filters,
    search: state.search.search
  }), {
    fetchSearch,
    fetchLocations
  })(SearchForm);
