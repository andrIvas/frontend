import React, { Component, PropTypes } from 'react';

class Row extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    current: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      highlight: false
    };
  }

  handleOnClick = (event) => {
    this.props.onSelect(this.props, event);
  };
  handelMouseOver = () => {
    this.setState({ highlight: true });
  };
  handleMouseLeave = () => {
    this.setState({ highlight: false });
  };

  render() {
    const { current, name } = this.props;
    return (<li
      className={`select2-results__option ${this.state.highlight ? 'select2-results__option--highlighted' : ''}`}
      role="treeitem"
      aria-selected={current}
      onClick={this.handleOnClick}
      onMouseOver={this.handelMouseOver}
      onMouseLeave={this.handleMouseLeave}
    >{name}</li>);
  }
}

export default Row;
