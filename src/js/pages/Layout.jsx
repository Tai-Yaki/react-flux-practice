import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

const Layout = ({ location, children }) => {
  const containerStyle = {
    marginTop: 60,
  };

  return (
    <div>
      <Nav location={location} />
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-lg-12">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  location: '/',
  children: <div />,
};

export default withRouter(Layout);
