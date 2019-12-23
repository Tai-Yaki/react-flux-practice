import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ location }) => {
  const [collapsed, setCollapsed] = useState(true);
  const featuredClass = location.pathname === '/' ? 'active' : '';
  const archivesClass = location.pathname.match(/^\/favorites/) ? 'active' : '';
  const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
  const navClass = collapsed ? 'collapse' : '';

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-md  navbar-light bg-light" role="navigation">
      <div className="containter">
        <div className="navbar-header">
          <button type="button" className="navbar-toggler" onClick={() => { toggleCollapse(); }}>
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className={`navbar-collapse ${navClass}`} id="bs-navi">
          <ul className="navbar-nav">
            <li className={`nav-item ${featuredClass}`}>
              <Link to="/" className="nav-link" onClick={() => { toggleCollapse(); }}>Todos</Link>
            </li>
            <li className={`nav-item ${archivesClass}`}>
              <Link to="favorites" className="nav-link" onClick={() => { toggleCollapse(); }}>Favorites</Link>
            </li>
            <li className={`nav-item ${settingsClass}`}>
              <Link to="settings" className="nav-link" onClick={() => { toggleCollapse(); }}>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  location: PropTypes.string,
};

Nav.defaultProps = {
  location: '/',
};

export default Nav;
