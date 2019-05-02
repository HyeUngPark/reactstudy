import React, { Component } from 'react';
import '../css/ref.css';

class RefPractice extends Component {
    state = {
        password  : '',
        clicked   : false,
        validated : false
    }

    handleChange =(e)=>{
        this.setState({
            password : e.target.value
        });
    }
    
    handleClick = ()=>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
    }
    handleChange2 =(e)=>{
        this.setState({
            password : e.target.value
        });
    }
    handleClick2 = ()=>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
        this.input.focus();
    }


    render() {
        return (
            <div>
                <input 
                    type ="password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button
                    onClick = {this.handleClick}
                >
                    검증
                </button>
                <br />
                <input 
                    type ="password"
                    ref = {(ref)=>this.input=ref}
                    value = {this.state.password}
                    onChange = {this.handleChange2}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button
                    onClick = {this.handleClick2}
                >
                    검증2
                </button>
            </div>
        );
    }
}

export default RefPractice;