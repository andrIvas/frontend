import React, { PropTypes } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="wrapper">
        <div className="base _gray">
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
