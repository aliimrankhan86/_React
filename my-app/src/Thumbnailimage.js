import React, { Component } from 'react';
import './thumbnail.css';
//import Thumbnailtext from './Thumbnailtext';
class Thumbnailimage extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
      { 
          this.props.source.map(item => {
            return <div className="thumbnail">
              <img src ={item.path} /> 
                <div className="thumbnailtext">
                  <p>{item.name}</p>
                  <div className="thumbnaildescription">
                    <span>{item.Description}</span>
                  </div>
                </div>
              </div>
          })
      }
      </div>
    )
  }
}


export default Thumbnailimage;
