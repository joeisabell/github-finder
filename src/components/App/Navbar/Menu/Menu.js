import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css'

export default ({ toggleMenu }) => {
  return (
    <div className="Navbar_Menu__container">
      <Link to="/app">
        <div className="Navbar_Menu__tile">
          <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
          </svg>
          All Charts
        </div>
      </Link>
      <Link to="/app">
        <div className="Navbar_Menu__tile">
          <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          My Charts
        </div>
      </Link>
    </div>
  )
}
