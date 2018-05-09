import React, { Component } from 'react';
import './searchbox.css';

class Searchbox extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
    render() {
      return (
        <input type="text" id="searchbox" placeholder="Search Video" />
      )
    }
  }


export default Searchbox;
