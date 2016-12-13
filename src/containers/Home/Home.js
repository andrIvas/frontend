import React, { Component, PropTypes } from 'react';
import MainContent from './MainContent';
import SectionBS from './SectionBS';


class Home extends Component {
  render() {
    return (
      <div>
        <SectionBS />
        <MainContent />
      </div>
    );
  }
}

export default Home;
