import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './../../../Environment';

import './Search.css';
import github_logo from './../../../assets/github_logo.png'

import Results from './Results/Results';
import Loading from './../Loading/Loading';

const SearchAllDataQuery = graphql`
  query SearchAllDataQuery($name: String!) {
    search(query: $name, type:USER, first:20) {
      edges {
        node {
          ... on User {
            name
            login
            location
            avatarUrl
          }
        }
      }
    }
  }
`
class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    const { userInput } = this.state
    return (
      <div className="Search__container">
        <div className="Search__header">
          <img src={ github_logo } alt="GitHub Logo" />
          <input
            placeholder="Search GitHub Users"
            className="Search__inputBox"
            type="text"
            value={userInput}
            onChange={ this.handleChange }
          />
        </div>
    
        <QueryRenderer
          environment={ environment }
          query={ SearchAllDataQuery }
          variables={{ name: userInput }}
          render={
            ({ error, props }) => {
              if(error) {
                return <div>{error.message}</div>
              } else if (props) {
                return <Results search={props.search} />
              }
              return <Loading />
            }
          }
        />
      </div>
    );
  }
}

export default Search;
