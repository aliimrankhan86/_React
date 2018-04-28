import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Videoplayer from './Videoplayer';
import Logo from './Logo';
import Thumbnailimage from './Thumbnailimage';
import Thumbnailtext from './Thumbnailtext';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="third-fourth">
          <Logo />
          <Videoplayer />
        </div>

        <div className="one-fourth">
          <Thumbnailimage />
          <Thumbnailtext />
        </div>
      </div> 
    );
  }
}

export default App;
