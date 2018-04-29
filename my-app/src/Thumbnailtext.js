import React, { Component } from 'react';
import './thumbnail.css';

class Thumbnailtext extends React.Component {
  render() {
    // console.log(this.props.value);
    return (
      <div>
      { 
          this.props.value.map(item => {
            return <div>{item.name}</div>
          })
      }
      </div>
    )
  }
}

export default Thumbnailtext;
