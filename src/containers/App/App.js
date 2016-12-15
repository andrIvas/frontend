import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {} from '../../scss/main_global.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };


  render() {
    return (
      <div className="app">
        <Helmet {...config.app.head} />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
