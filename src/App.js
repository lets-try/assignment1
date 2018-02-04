import React, { Component } from 'react';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';
import './App.css';

class App extends Component {

  state = {
    username:'Puja',
  };

   inputChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    const style = {
      padding :'30px',
      margin :'16px',
      border : '5px solid black',
      bacgroundColor : 'yellow'
    };

    return (
      <div>
        <UserOutput username = {this.state.username} para1="First para of first output" para2="Second para of first output"></UserOutput>
        <UserOutput username = {this.state.username} para1="First para of second output" para2="Second para of second output"></UserOutput>
        <UserInput style = { style } handleChange = {this.inputChangeHandler}  username= {this.state.username}/>
      </div>
    );
  }
}

export default App;
