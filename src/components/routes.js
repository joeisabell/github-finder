import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing  from './Landing/Landing';
import App      from './App/App';

export default (
  <Switch>
    <Route exact path='/' component={ Landing } />
    <Route path='/app' component={ App } />
  </Switch>
)
