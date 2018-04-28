import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Videoplayer from './Videoplayer';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="third-fourth">
          <Logo />
          <Videoplayer />
        </div>
        
        <div className="one-fourth">
          <div className="thumbnail">
            <img src="http://via.placeholder.com/168x94" alt="thumbnail"/>
          </div>
          <div className="thumbnail-text">
              <p>Video Name</p>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
