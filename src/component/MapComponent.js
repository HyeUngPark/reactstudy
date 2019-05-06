import React, { Component } from 'react';

class MapComponent extends Component {
    render() {
        var numbers = [1,2,3,4,5];
        var processed = numbers.map(
            function(num){
                return num * num;
            }
        );

        console.log(processed);
        return (
            <div>
                
            </div>
        );
    }
}

export default MapComponent;