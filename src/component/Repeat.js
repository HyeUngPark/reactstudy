import React, { Component } from 'react';

class Repeat extends Component {
    state ={
        fruits : ['사과','배','바나나','포도','수박']
    };
    render() {
        // const fruits = ['사과','배','바나나','포도','수박'];
        // const fruitsList = fruits.map(
        //     (fruit,index) => (<li key={index}>{fruit}</li>)
        // );
        
        const fruitsList = this.state.fruits.map(
            (fruit,index) => (<li key={index}>{fruit}</li>)
        );
        return (
            <div>
                <ul>
                    {fruitsList}
                </ul>
            </div>
        );
    }
}

export default Repeat;