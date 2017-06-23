import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import './Dashboard.css';

import BarChart from './../charts/BarChart/BarChart';
import LineChart from './../charts/LineChart/LineChart';

class Dashboard extends Component {
  render() {
    const data = this.props.viewer.allSaleses.edges.map(edge => {
      return {
        earnings: edge.node.amount,
        quarter: edge.node.quarter
      }
    })
    return (
      <div className="Dashboard__container">
        <BarChart data={ data } />
        <LineChart data={ data } />
      </div>
    )
  }
}

export default createFragmentContainer(
  Dashboard,
  graphql`
    fragment Dashboard_viewer on Viewer {
      allSaleses {
        edges {
          node {
            amount
            quarter
          }
        }
      }
    }
  `,
)
