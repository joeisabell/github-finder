import React from 'react';

import './Navbar.css';
import appIcon from './../../../assets/apps.svg';

const Navbar = props => {
  return (
    <nav className="Navbar__container">
      <h2 className="Navbar__title">Dashboard</h2>
      <img className="Navbar_appIcon" src={ appIcon } alt="more options" />
    </nav>
  )
}

export default Navbar;
