import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './../../../Environment';

import './Profile.css';

import Loading from './../Loading/Loading';
import UserProfile from './UserProfile';

class Profile extends Component {
  render() {
    const { login } = this.props.match.params
    return (
      <div>
        <QueryRenderer
          environment={ environment }
          query={ ProfileAllDataQuery }
          variables={{
            login: login
          }}
          render={ ({ error, props }) => {
              if(error) {
                return <div>{error.message}</div>
              } else if (props) {
                return <UserProfile user={props.user} />
              }
            return <Loading />
          }}
        />
      </div>
    );
  }
}

const ProfileAllDataQuery = graphql`
  query ProfileAllDataQuery($login: String!) {
    user(login: $login) {
      id
      name
      login
      avatarUrl
      location
      url
      organizations(first: 5) {
        edges {
          node {
            name
          }
        }
      }
      repositories(last: 5) {
        totalCount
        edges {
          node {
            id
            name
            description
            homepageUrl
            isFork
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`

export default Profile;
