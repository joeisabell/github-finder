import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Result.css';

class Result extends Component {
  render() {
    const{ user } = this.props
  return (
      <div className="Result__tile">
        <Link to={`/app/${user.login}`}>
          <img style={{width:"100px"}} src={ user.avatarUrl} alt="Avatar" />
          <p>{ user.name || user.login }</p>
        </Link>
      </div>
    )
  }
}

export default Result
