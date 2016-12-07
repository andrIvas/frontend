import React, { Component } from 'react';
import About from './About';
import Menu from './Menu/Menu';
import Copyright from './Copyright';
import {} from './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="section-inner">
          <About />
          <Menu />
          <Copyright />
        </div>
      </div>
    );
  }
}

export default Footer;
