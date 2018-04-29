import React, { Component } from 'react';
import './thumbnail.css';
import Thumbnailtext from './Thumbnailtext';
class Thumbnailimage extends React.Component {
  render() {
    return (
      <div>
      { 
          this.props.source.map(item => {
            return <div>
              <img src ={item.path} /> 
              <p>{item.name}</p>
              </div>
          })
    
      }
      </div>
    )
  }
}

export default Thumbnailimage;
