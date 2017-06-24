import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  render() {
    const{ displayMenu } = this.state;
    return (
      <nav className="Navbar__container">
        <Link to="/"><h2 className="Navbar__title">Visualize Your GraphQLs</h2></Link>
        <span  className="Navbar__appIcon">
          <svg onClick={ this.toggleMenu } fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          {
            displayMenu ? <Menu toggleMenu={ this.toggleMenu } /> : ''
          }
        </span>
      </nav>
    )
  }
}

export default Navbar;
