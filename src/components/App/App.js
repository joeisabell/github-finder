import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Profile from './Profile/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/app" component={ Search } />
          <Route exact path="/app/:login" component={ Profile } />
        </Switch>
      </div>
    )
  }
}

export default App;
