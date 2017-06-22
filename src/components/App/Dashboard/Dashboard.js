import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import './Dashboard.css';

import BarChart from './../charts/BarChart/BarChart';
import LineChart from './../charts/LineChart/LineChart';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard__container">
        <BarChart data={ data } />
        <LineChart data={ data } />
      </div>
    )
  }
}

export default createFragmentContainer(Dashboard, graphql`
  fragment Dashboard_viewer on Viewer {
    allQuarters {
      edges {
        node {
          name
          earnings
        }
      }
    }
  }
  `)
