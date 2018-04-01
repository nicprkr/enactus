import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './component/Navigation';
import LandingPage from './component/Landing';
import SignUpPage from './component/SignUp';
import SignInPage from './component/SignIn';
import PasswordForgetPage from './component/PasswordForget';
import HomePage from './component/Home';
import AccountPage from './component/Account';

import * as routes from './constants/routes';
import { firebase } from './firebase';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authUser: null
        };
    }
    
    componentDidMount(){
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState(() => ({ authUser }))
            : this.setState(() => ({ authUser:null }));
        });
    }
    
    render(){
        return (
          <Router>
      <div>
      <Navigation authUser={this.state.authUser} />
      <hr/>
      <Route
        exact path={routes.LANDING}
        component={()=> <LandingPage />}
      />      
      <Route
        exact path={routes.SIGN_UP}
        component={()=> <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={()=> <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={()=> <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={()=> <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={()=> <AccountPage />}
      />
        </div>
      </Router>
        );
    }
}   

export default App;

/*import './App.css';
import Nav from './comp/Nav.js';
import Home from './comp/Home.js';
import Profile from './comp/Profile.js';
import Statistics from './comp/Statistics';
//import Users from './comp/Users';
//import Projects from './comp/Projects';
import Login from './comp/Login';
import fire from './firebase.js';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            page:0,
            //change to false to see login page
            loggedIn:true,
            userInfo:[],
            
        }
this.changePage = this.changePage.bind(this);
this.login = this.login.bind(this);
this.userInfo = this.userInfo.bind(this);
    }
  
changePage(num){
    this.setState({
        page:num
    });
}

login(user){

    let firebase = fire.database();
    firebase.auth().signInWithEmailAndPassword(user.email, user.pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
    });
    this.setState({
        loggedIn:true
    })
    if(user.email === 'erin@bcit.ca'){
        if(user.pass === '123'){
            this.setState({
            loggedIn:true
            });
    console.log(user);
        } else {
            console.log("password error");
        }
    } else {
        console.log("email error!");
    }
    console.log("unavailable");
}
    
userInfo(data){
    this.setState({
        userEmail:data.email,
    });
    console.log(data.email);
}
  render() {
    var page = null;
    var nav = false;
    if (this.state.loggedIn === false){
        page = (
    
        <Login 
            login = {this.login}
            userInfo = {this.userInfo}
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
    } else if (this.state.page === 3){
        page = (
        <Users />
        )
        
    } else if (this.state.page === 4){
        page = (
        <Projects />
        )
    }  else if (this.state.page ===0) {
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

export default App;*/
