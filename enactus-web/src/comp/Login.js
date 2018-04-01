import React, { Component } from 'react';
import './css/Home.css';

class Login extends Component {
    constructor(props){
        super(props);
        
    this.login = this.login.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPass = this.loginPass.bind(this);
    }
    
componentWillMount(){
    this.setState({
        login:0
    });
}
loginEmail(evt){
        this.setState({
            email:evt.target.value
        });
    }
loginPass(evt){
    this.setState({
        pass:evt.target.value
    });
}
    
//dummy account => email: erin@bcit.ca, pass: 123
login(){
    var obj = {
        email:this.state.email,
        pass:this.state.pass
    };
    this.props.login(obj);
}
    
  render() {
      
      var signin = null;
      if(this.state.login === 1){
          signin = (
          <div>
              <form>
                <input type="text" placeholder="First Name"/><br/>
                <input type="text" placeholder="Last Name"/><br/>
                <input type="text" placeholder="BCIT Program Name"/><br/>
                <input type="text" placeholder="Email Address" /><br/>
                <input type="password" placeholder="Password" /><br/>
                <input type="password" placeholder="Confirm Password" /><br/>
              <button onClick = {()=>{this.alert("Email sent!")}}>Go</button>
      </form>
      <p>Already have an account? <span style={{color:"grey"}} onClick={()=> {this.setState({ login:0 })}}>Go back!</span></p>
      </div>
          )
          
      } else if (this.state.login === 0){
          signin = (
              <div>
        
            <input type="text" placeholder="Email Address" onChange={this.loginEmail}/><br/>
            <input type="password" placeholder="Password" onChange={this.loginPass}/>
        <br/>
        <button onClick={this.login}>Go</button>
        <br/><br/>
        <p>Don't have an account? <span style={{color:"grey"}} onClick={()=> {this.setState({ login:1 })}}>Sign up!</span></p>
              </div>
          )
      }
      
    return (
        <div>
        <h1>WELCOME</h1>
        <h2>Enactus Time Tracker</h2>
        {signin}
      </div>
    );
  }
}

export default Login;