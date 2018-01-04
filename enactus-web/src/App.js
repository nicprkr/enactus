import React, { Component } from 'react';
import './App.css';
import Nav from './comp/Nav.js';
import Home from './comp/Home.js';
import Profile from './comp/Profile.js';
import Statistics from './comp/Statistics';
//import Users from './comp/Users';
//import Projects from './comp/Projects';
import Login from './comp/Login';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            page:0,
            //change to false to see login page
            loggedIn:true
            
        }
this.changePage = this.changePage.bind(this);
this.login = this.login.bind(this);
    }    

changePage(num){
    this.setState({
        page:num
    });
}
login(){
    this.setState({
        loggedIn:true
    });
    console.log(this.state.loggedIn);
}
  render() {
    var page = null;
    var nav = false;
    if (this.state.loggedIn === false){
        page = (
    
        <Login 
            login = {this.login}
            />
        )
    } else if (this.state.loggedIn === true){
    nav = (
       <Nav 
            changePage = {this.changePage}
            />
    );
        
    if (this.state.page === 1){
        page = (
        <Profile />
        )
    } else if(this.state.page === 2){
        page = (
        <Statistics />
        )
    } /*else if (this.state.page === 3){
        page = (
        <Users />
        )
        
    } else if (this.state.page === 4){
        page = (
        <Projects />
        )
    } */ else if (this.state.page ===0) {
        page = (
        <Home />
        )
    }
}
    return (
      <div className="App">
        {nav}
        {page}
        </div>
    );
  }
}

export default App;
