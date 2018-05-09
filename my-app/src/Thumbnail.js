import React, { Component } from 'react';
import './thumbnail.css';
import Thumbnailimage from './Thumbnailimage';

class Thumbnail extends React.Component {

  constructor(props) {
    super(props)
    this.t = 2;
    console.log('Constructor has fired');

    this.state = {
      video: [
        {name: 'New President', Description: '2018 Election Result', id: 1, path: 'http://via.placeholder.com/200x150'},
        {name: 'Energy Efficency', Description: 'Shell 2018 vision', id: 2, path: 'http://via.placeholder.com/200x150'},
        {name: 'Kwick Doctor', Description: 'Consultation Online', id: 3, path: 'http://via.placeholder.com/200x150'}
      ]
    }
  }

  componentDidMount() {
    console.log('Component did Mount has fired');
  }

  

  test = () => {
    let data = this.state.video;
    data.push({name: 'Ali Khan', Description: 'React', path: 'http://via.placeholder.com/200x150'})
    console.log(data);
    // console.log(this.setState = {data});
    this.setState({
      video: data
    })
  }
  
  
    render() {
      return (
        <div>
          <button onClick={this.test}>
            Append Data
          </button>
          <Thumbnailimage source={this.state.video}/>
        </div>
      )
    }
  }


export default Thumbnail;
