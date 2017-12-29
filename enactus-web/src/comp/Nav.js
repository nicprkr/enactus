import React, { Component } from 'react';
import './css/Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);
        
this.goToHome = this.goToHome.bind(this);        
this.goToProfile = this.goToProfile.bind(this);        
this.goToStats = this.goToStats.bind(this);        
this.goToUsers = this.goToUsers.bind(this);        
this.goToProjects = this.goToProjects.bind(this);        
    }
    
goToHome(){
    this.props.changePage(0);
}
goToProfile(){
    this.props.changePage(1);
}
goToStats(){
        this.props.changePage(2);
}
goToUsers(){
        this.props.changePage(3);
}
goToProjects(){
        this.props.changePage(4);
}
  render() {
      
    return (
      <div className="nav-style">
            <ul className="ul-style">
                <li onClick={this.goToHome}>Home</li>
                <li onClick={this.goToProfile}>Profile</li>
                <li onClick={this.goToStats}>Statistics</li>
                <li onClick={this.goToUsers}>Users</li>
                <li onClick={this.goToProjects}>Projects</li>
            </ul>
        </div>
    );
  }
}

export default Nav;