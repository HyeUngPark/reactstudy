import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LifeCycle from './component/LifeCycle';

function getRandomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }
  handleClick = () =>{
    this.setState({
      color : getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycle color={this.state.color}/>
      </div>
    );
  }
}

export default App;
