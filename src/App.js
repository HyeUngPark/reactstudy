import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropComponent from './component/PropComponent';
// import StateComponent from './component/StateComponent';
// import EventPractice from './component/EventPractice4';
// import RefPractice from './component/RefPractice';
import ScrollBox from './component/ScrollBox';

class App extends Component {
  state={
    upDown : 'd'
    ,value : 'To Bottom'
  }
  updownChange =() =>{
    if(this.state.upDown === 'd'){
      this.setState({
        upDown:'u'
        ,value : 'To Top'
      }); 
    }else{
      this.setState({
        upDown:'d'
        ,value : 'To Bottom'
      }); 
    }
    
  };
  render() {
    return (
      <div>
        <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
        <button 
          onClick={
            ()=>{
              this.ScrollBox.scrollToChange(this.state.upDown);
              this.updownChange();
            } 
          }
         
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}

export default App;
