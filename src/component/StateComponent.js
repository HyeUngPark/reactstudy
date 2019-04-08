import React, { Component } from 'react';

class StateComponent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number : 100
    //     }
    // }
    
    state = {
        name : "HyeUng"
        ,number : 100
    }

    render() {
        return (
            <div>
                숫자 : {this.state.number}
                <br/><br/><button onClick={()=>{
                    this.setState({
                        number : this.state.number - 1
                    })
                }
                }>빼기</button>
                <br /><br />
                이름 : {this.state.name}
            </div>
        );
    
    }
}

export default StateComponent;
