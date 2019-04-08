import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropComponent from './component/PropComponent';
import StateComponent from './component/StateComponent';

class App extends Component {
  render() {
    return (
      // <PropComponent name={["hyeung","park"]}/>
      <StateComponent />
    );
  }
}

export default App;
