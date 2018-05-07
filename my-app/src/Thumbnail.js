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

      let test = () => {
        let data = this.state.video;
        data.push({name: 'Ali Khan', Description: 'React', path: 'http://via.placeholder.com/200x150'})
        
        console.log(data);
        console.log(this.setState = {data});
        this.setState = {data};
      }


      // console.log(this.state.video[0].name)
      return (
        <div>

        <button onClick={test}>
          Append data
        </button>


        <Thumbnailimage source={this.state.video}/>
        </div>
      )
    }
  }


export default Thumbnail;
