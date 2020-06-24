import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    username: 'Bobby'
  }

  //Change username name event-handler
  changeUsernameHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1> Assignment 1 </h1>
        <UserInput 
          changed={this.changeUsernameHandler}
          currentName={this.state.username}/>
        <UserOutput userName={this.state.username }/>
        <UserOutput userName={this.state.username }/>
        <UserOutput userName={this.state.username } />

      </div>
    );
  }
}

export default App;
