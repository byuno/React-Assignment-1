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

    const style = {
      border: '10px solid black',
      padding: '10px',
      backgroundColor: 'chartreuse',
      width: '90%',
      postion: 'relative'
    }

    return (
      <div className="App">
        <h1 style={ style }> Assignment 1 </h1>
        <UserInput 
          changed={ this.changeUsernameHandler }
          currentName={ this.state.username }/>
        <UserOutput userName={ this.state.username }/>
        <UserOutput userName={ this.state.username }/>
        <UserOutput userName={ this.state.username }/>
      </div>
    );
  }
}

export default App;
