import React from 'react';

import './UserProfile.css';

const UserProfile = props => {
    const{ name, login, avatarUrl, location, url, repositories } = props.user;
    return (
        <div className="Profile_UserProfile__container">
          <span>
            <img src={ avatarUrl } alt="Profile" />
          </span>
          <div className="UserProfile__userInfo">
            <h2>{ name }</h2>
            <h4>{ login }</h4>
            <h4>{ location }</h4>
            <h4>Repo Count: { repositories.totalCount }</h4>
            <a href={ url }>View Profile on GitHub</a>
          </div>
        </div>
    )
  }

export default UserProfile
