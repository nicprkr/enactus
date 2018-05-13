import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db, auth, user } from '../firebase/firebase';

const HomePage = () =>
<div>
    <h1>Hours</h1>
    <HoursForm />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    project: '',
    hours: '',
    minutes: ''
};

class HoursForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
    

  componentDidMount() {
      this.setState({
          user:user
      })
  }
    
    onSubmit = (event) => {
        const {
            project,
            hours,
            minutes,
            user
        } = this.state;
        console.log(this.state);
        this.setState({ ...INITIAL_STATE });
        
        event.preventDefault();
    }

  render() {
      const { project,
            hours,
            minutes,
            user,
            error,
            } = this.state;
      
      const isInvalid = 
            project === '' || hours === '' || minutes === '';
      
    return (
        <form onSubmit={this.onSubmit}>
        <select name="project" placeholder="Select your project..." className="projectInp" onChange={event => this.setState(byPropKey('project', event.target.value))}>
            <option value="marketing">marketing</option>
            <option value="teaching">teaching</option>
            <option value="meetings">meetings</option>
        </select>
        <input name="hours" type="number" min="0" max="8" placeholder="Hours" className="timeInp" onChange={event => this.setState(byPropKey('hours', event.target.value))} />
        <input name="mins" type="number" min="0" max="59" placeholder="minutes" className="timeInp" onChange={event => this.setState(byPropKey('minutes', event.target.value))} />
    <button
        disabled={isInvalid}
        type="submit"
        >Add</button>
        { error && <p>{error.message}</p> }
         </form>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);