import React, { Component } from 'react';
// import styles from './App.css';
import styles from './App.css';
import classNames from 'classnames';
// console.log(styles);

class App extends Component {
    render() {
        return ( 
/*
             <div className="blue box">
 */
            <div className={classNames(styles.blue, styles.box)}>
                test
            </div>
        );
    }
}

export default App;