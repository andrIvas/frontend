import React, { Component } from 'react';
import { Link } from 'react-router';


class Logo extends Component {
  render() {
    return (
      <div className="header-logo_block">
        <Link className="header-logo" to="/"><span>КВА<span className="header-logo_r">Р</span>ТИРУМ</span></Link>
      </div>
    );
  }
}

export default Logo;
