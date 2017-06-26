import React from 'react';
import loading from './../../../assets/loading.svg'
import './Loading.css';

export default props => {
  return (
    <div className="Loading__container">
    <img src={ loading } alt="Loading..." />
    </div>
  )
}
