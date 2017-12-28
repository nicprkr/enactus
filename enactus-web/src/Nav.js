import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);
    }
  render() {
      
    return (
      <div className="nav-style">
            <ul className="ul-style">
                <li>Home</li>
                <li>Profile</li>
                <li>Statistics</li>
                <li>Users</li>
                <li>Projects</li>
            </ul>
        </div>
    );
  }
}

export default Nav;