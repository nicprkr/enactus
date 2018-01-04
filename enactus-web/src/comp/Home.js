import React, { Component } from 'react';
import './css/Home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }
  render() {
      
    return (
        <div>
        <header className="App-header">
          <h1 className="App-title">Add Hours</h1>
        </header>
        <form className="Hours-form">
        
        <select name="project" placeholder="Select your project..." autofocus className="projectInp">
            <option value="Project" disabled="disabled">Select your project</option>
            <option value="marketing">marketing</option>
            <option value="teaching">teaching</option>
            <option value="meetings">meetings</option>
        </select>
        
        <br/><br/>
            <input name="hours" type="number" min="0" max="8" placeholder="hours" className="timeInp" />
            <input name="mins" type="number" min="0" max="59" placeholder="minutes" className="timeInp" />
        <br/><br/>
            <button className="button-dark">Add</button>
        </form>
      </div>
    );
  }
}

export default Home;