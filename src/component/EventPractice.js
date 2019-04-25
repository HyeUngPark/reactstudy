import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습 - 함수를 랜더링 시 만들어서 핸들링</h1>
                <button onClick={
                    ()=>{
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        })
                    }
                }>
                초기화
                </button>
                <input type = "text"
                        name = "message"
                        placeholder = "input message"
                        onChange={
                            (e) =>{
                            //    console.log(e);
                                console.log(e.target.value);
                            this.setState({
                                message:e.target.value
                            })
                            }
                        }
                        value = {this.state.message}
                />
            </div>
        );
    }
}

export default EventPractice;