import React, { Component } from 'react';
import './thumbnail.css';
import Thumbnailimage from './Thumbnailimage';

class Thumbnail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      video: [
        {name: 'New President', Description: '2018 Election Result', path: 'http://via.placeholder.com/200x150'},
        {name: 'Energy Efficency', Description: 'Shell 2018 vision', path: 'http://via.placeholder.com/200x150'},
        {name: 'Kwick Doctor', Description: 'Consultation Online', path: 'http://via.placeholder.com/200x150'}
      ]
    }
  }
  
    render() {
      // console.log(this.state.video[0].name)
      return (
        <Thumbnailimage source={this.state.video}/>
      )
    }
  }


export default Thumbnail;
