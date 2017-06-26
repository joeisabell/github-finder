import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import graphql from './../../assets/graphql.svg';
import github_logo from './../../assets/github_logo.png';
import relay from './../../assets/relay.svg';
import react from './../../assets/react.svg';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <main className="Landing__container">
        <header className="Landing__header">
          <nav className="Landing__nav">
            <img className="Landing__nav_logo" src={ github_logo } alt=" BMI Logo" />
            <img className="Landing__nav_logo" src={ graphql } alt=" BMI Logo" />
            <img className="Landing__nav_logo" src={ relay } alt=" BMI Logo" />
            <img className="Landing__nav_logo" src={ react } alt=" BMI Logo" />
          </nav>
          <section className="Landing__CTA">
            <h1>Find People on GitHub </h1>
            <Link to="/app"><button> try it </button></Link>
          </section>
        </header>
      </main>
    )
  }
}

export default Landing
