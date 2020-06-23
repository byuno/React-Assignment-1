import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {

  state = {
    username: [
      { name: 'Bobby'},
      { name: 'Robert'},
      { name: 'Yutaka'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> Assignment 1 </h1>
        <UserOutput name={this.state.username[0].name}/>
        <UserOutput name={this.state.username[1].name}/>
        <UserOutput name={this.state.username[2].name}/>

      </div>
    );
  }
}

export default App;
