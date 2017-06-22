import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';

import './App.css';

import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App__Dashboard">
        <Navbar />
        <Switch>
          <Route path="/app" component={ Dashboard } />
        </Switch>
      </div>
    );
  }
}

export default App;
