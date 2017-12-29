import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            login:0
        }
    this.login = this.login.bind(this);
    }
    
login(){
    this.props.login(true);
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
                  <form>
            <input type="text" placeholder="Email Address" /><br/>
            <input type="password" placeholder="Password" />
        <br/>
        <button onClick={this.login}>Go</button>
        </form>
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