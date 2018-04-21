import React, { Component } from 'react';
import './contactdetails.css';

class ContactDetails extends Component {
  render() {
    return (
      <div className="contactdetails">
        <ul>
          <li>Ali Imran Khan <span>User Interface Developer</span></li>
          <li>Kamran Aslam <span>User Experience Designer</span></li>
          <li>Mohammad Ali <span>Front End Developer</span></li>
        </ul>  
      </div>
    )
  }
}

export default ContactDetails;
