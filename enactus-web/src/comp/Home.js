import React, { Component } from 'react';
import './css/Nav.css';

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
        
        <select name="project" placeholder="Select your project...">
            <option value="Project" disabled="disabled">Select your project</option>
            <option value="marketing">marketing</option>
            <option value="teaching">teaching</option>
            <option value="meetings">meetings</option>
        </select>
        
        <br/><br/>
            <input name="hours" type="number" min="0" max="8" placeholder="hours" />
            <input name="mins" type="number" min="0" max="59" placeholder="minutes" />
        <br/><br/>
            <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Home;