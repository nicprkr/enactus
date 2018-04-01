import React, { Component } from 'react';
import './css/Home.css';
import fire from './../firebase.js';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
                hours:0,
                mins:0,
            project:''
        }
    this.projectChange = this.projectChange.bind(this);
    this.hourChange = this.hourChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.minChange = this.minChange.bind(this);
    }
    
componentWillMount(){
    this.setState({
        msg:''
    })
}
projectChange(evt){
    let project = evt.target.value;
    this.setState({
        project:project
    });
    console.log(evt.target.value);
}
hourChange(evt){
        let hrs = evt.target.value;
    this.setState({
        hours:hrs
    });
}
minChange(evt){
    let min = evt.target.value;
    this.setState({
        mins:min
    });
}
handleSubmit(e) {
  e.preventDefault();
  const timeRef = fire.database().ref('hours');
  var time = {
    project: this.state.project,
    hours: this.state.hours,
    mins: this.state.mins
  };
    console.log(time);
  timeRef.push(time);
  this.setState({
    hours: 0,
    mins: 0,
    project: ''
  });

}
  render() {
      
    return (
        <div>
        <header className="App-header">
          <h1 className="App-title">Add Hours</h1>
        </header>
        <form className="Hours-form" onSubmit={this.handleSubmit}>
        
        <select name="project" placeholder="Select your project..." className="projectInp" onChange={this.projectChange}>
            <option value="marketing">marketing</option>
            <option value="teaching">teaching</option>
            <option value="meetings">meetings</option>
        </select>
        
        <br/><br/>
            <label>Hours</label><input name="hours" type="number" min="0" max="8" placeholder={this.state.hours} className="timeInp" onChange={this.hourChange}/>
            <label>Minutes</label><input name="mins" type="number" min="0" max="59" placeholder={this.state.mins} className="timeInp" onChange={this.minChange}/>
        <br/><br/>
            <p>{this.state.msg}</p>
            <button 
                className="button-dark" 
                onClick = {()=>this.setState({ msg:"Hours logged successfully!" })}>Add</button>
        </form>
      </div>
    );
  }
}

export default Home;