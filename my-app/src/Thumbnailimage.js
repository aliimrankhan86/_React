import React, { Component } from 'react';
import './thumbnail.css';
//import Thumbnailtext from './Thumbnailtext';
class Thumbnailimage extends React.Component {
  constructor(props) {
    super()
  }
  loadVideo = (e, id) => {
    console.log(e);

    console.log(id);
    // console.log(para1);
  }




  render() {
    return (
      <div>
      { 
          this.props.source.map(item => {
            return <div className="thumbnail" onClick={(event, id) => this.loadVideo(event, item.id) }>
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
