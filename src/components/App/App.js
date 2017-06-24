import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './../../Environment';

import './App.css';

import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Loading from './Loading/Loading';


const AppAllDataQuery = graphql`
  query AppAllDataQuery {
    viewer {
      ...Dashboard_viewer
    }
  }
`

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <QueryRenderer
          environment={ environment }
          query={ AppAllDataQuery }
          render={ ({ error, props }) => {
              if(error) {
                return <div>error.message</div>
              } else if (props) {
                return <Dashboard viewer={ props.viewer } />
              }
            return <Loading />
          }}
        />
      </div>
    );
  }
}

export default App;
