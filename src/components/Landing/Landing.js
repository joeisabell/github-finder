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
          <section className="Landing__CTA">
            <h1>Save the data that is important to you...</h1>
            <Link to="/app"><button> try it </button></Link>
          </section>
        </header>
      </main>
    )
  }
}

export default Landing
