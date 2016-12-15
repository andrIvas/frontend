import React, { Component, PropTypes } from 'react';


class Select extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string,
    multiSelect: PropTypes.bool,
    changeFilter: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleShowToggle = () => {
    this.setState({ show: !this.state.show });
  };
  handleOnChange = (event) => {
    const value = event.target.value;
    if (value && value.length > 2) {
      this.props.changeFilter(value.toLowerCase());
    } else {
      this.props.changeFilter(undefined);
    }
  };

  render() {
    const { children, value, multiSelect, changeFilter } = this.props;
    const { show } = this.state;
    return (
      <div className={`input_w ${multiSelect ? 'select-multi-v1' : ''}`}>
        <span className={`select2 select2-container select2-container--default ${show ? 'select2-container--open' : ''}`} dir="ltr" style={{ width: '100%', zIndex: 11 }} onClick={this.handleShowToggle}>
          <span className="selection">
            <span className={`select2-selection select2-selection--${multiSelect ? 'multiple' : 'single'}`} role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1">
                <span className="select2-selection__rendered" title={value}>{value}</span>
              {!multiSelect && <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>}
              </span>
          </span>
        </span>
        <span className={`select2 select2-container select2-container--default ${show ? 'select2-container--open' : ''}`} onMouseLeave={this.handleShowToggle} style={{ position: 'absolute', top: '40px', left: '0px', right: '0px', width: '100%', zIndex: 11 }}>
          <span className="select2-dropdown dropdown-v1 select2-dropdown--below" dir="ltr" style={{ width: '100%' }}>
            {changeFilter ?
              <span className="select2-search select2-search--dropdown">
                <input className="select2-search__field" defaultValue="" onChange={this.handleOnChange} placeholder={value} type="search" tabIndex="0" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" role="textbox" />
              </span>
              : null}
            <span className="select2-results">
              <ul className="select2-results__options" role="tree" aria-multiselectable="true" aria-expanded="true" aria-hidden="false" onClick={this.handleShowToggle}>
                {children}
              </ul>
            </span>
          </span>
        </span>
        <span onClick={this.handleShowToggle} style={{ top: 0, left: 0, display: show ? 'block' : 'none', width: '100%', height: '100%', position: 'fixed', zIndex: 10 }} />
      </div>
    );
  }
}


export default Select;
