import React, { Component } from 'react';

class EventPractice2 extends Component {
    state = {
        message : ''
    }
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e){
    //     let inputMessage = e.target.value;
    //     console.log("input message : ",inputMessage);
    //     this.setState({
    //         message : inputMessage
    //     })
    // }

    // handleClick(){
    //     console.log("message == ",this.state.message);
    //     this.setState({
    //         message : ''
    //     })
    // }
    handleChange = (e) => {
        let inputMessage = e.target.value;
        console.log("input message : ",inputMessage);
        this.setState({
            message : inputMessage
        })
    }

    handleClick = () => {
        console.log("message == ",this.state.message);
        this.setState({
            message : ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습2 - 만들어논 함수를 전달해서 핸들링</h1>
                <input type = "text"
                    name = "message"
                    placeholder = "input message"
                    onChange={this.handleChange }
                    value = {this.state.message}
                />
                <button onClick={this.handleClick}>
                초기화
                </button>
            </div>
        );
    }
}

export default EventPractice2;