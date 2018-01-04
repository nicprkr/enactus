import React, { Component } from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
    }
  render() {
      
    return (
        <div>
        <header className="App-header">
          <h1 className="App-title">Profile</h1>
        </header>
        <div style={{ backgroundColor:"grey", borderRadius:"50%", height:"175px", width:"175px", float:"left", position:"relative", left:"75px" }}></div>
        <div style={{float:"right", textAlign:"right", paddingRight:"50px"}}>
        <p>First Name</p>
        <p>Last Name</p>
        <p>School</p>
        <p>Program</p>
        <p>Active Projects</p>
        </div>
      </div>
    );
  }
}

export default Profile;