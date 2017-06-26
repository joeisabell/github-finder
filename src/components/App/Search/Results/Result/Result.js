import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Result.css';

class Result extends Component {
  render() {
    const{ user, index } = this.props
  return (
      <div key={ index } className="Result__tile">
        <Link to={`/app/${user.login}`}>
          <img style={{width:"100px"}} src={ user.avatarUrl} />
          <p>{ user.name || user.login }</p>
        </Link>
      </div>
    )
  }
}

export default Result
