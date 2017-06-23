import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from './../../assets/logo.png';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <main className="Landing__container">
        <header className="Landing__header">
          <nav className="Landing__nav">
            <img className="Landing__nav_logo" src={ logo } alt=" BMI Logo" />
            <span className="Landing__nav_options">
              <Link className="Nav__options" to='/'>About</Link>
              <Link className="Nav__options" to='/'>Methods</Link>
              <Link className="Nav__options" to='/app'>Demo</Link>
            </span>
          </nav>
          <section>
            <h1>Where does this go?</h1>
          </section>
        </header>

      </main>
    )
  }
}

export default Landing
