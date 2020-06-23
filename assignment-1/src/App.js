import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Assignment 1 </h1>
        <UserOutput name="John" />
        <UserOutput name="Jane" />
        <UserOutput name="Jerry" />

      </div>
    );
  }
}

export default App;
