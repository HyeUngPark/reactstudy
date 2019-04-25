import React, { Component } from 'react';

class EventPractice4 extends Component {
    state = {
        name : ''
        ,age : 0
    }
    handleChange = (e) => {
        console.log("e.target.name = ",e.target.name);
        console.log("e.target.value = ",e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        alert("초기화!");
        console.log("name = ",this.state.name, " age = ",this.state.age);
        this.setState({
            name : ''
            ,age : 0
        })
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>onKeyPress 이벤트 핸들링</h1>
                <input type = "text"
                    name = "name"
                    placeholder = "input name"
                    onChange={this.handleChange }
                    value = {this.state.name}
                />
                <input type = "number"
                    name = "age"
                    placeholder = "input message"
                    onChange={this.handleChange }
                    value = {this.state.age}
                    onKeyPress = {this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                초기화
                </button>
            </div>
        );
    }
}

export default EventPractice4;