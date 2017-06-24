import React from 'react';
import loading from './../../../assets/loading.svg'
import './Loading.css';

export default props => {
  return (
    <div className="Loading__container">
    <h4> wait for it... wait for it... </h4>
    <img src={ loading } alt="Loading..." />
    </div>
  )
}
