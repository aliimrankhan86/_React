import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Videoplayer from './Videoplayer';
import Logo from './Logo';
import Thumbnail from './Thumbnail';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="third-fourth">
          <Logo />
          <Videoplayer />
        </div>

        <div className="one-fourth">
          <Thumbnail/>
        </div>
      </div> 
    );
  }
}

export default App;
