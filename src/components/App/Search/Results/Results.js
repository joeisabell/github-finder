import React, { Component } from 'react';

import Result from './Result/Result';

import './Results.css';

class Results extends Component {
  render() {
    return (
      <div className="Results__container">
          {
            this.props.search.edges.map((edge, i) => {
              return <Result user = { edge.node } index={ i } />
            })
          }
      </div>
    )
  }
}

export default Results
