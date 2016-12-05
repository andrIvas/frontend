import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import './Layout.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const tool = true ? <DevTools /> : null;
    return (
      <div className="wrapper">
        <div className="base _gray">
          <Header />
          {this.props.children}
        </div>
        <Footer />
        {tool}
      </div>
    );
  }
}

export default App;
