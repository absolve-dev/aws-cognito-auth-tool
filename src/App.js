import React, { Component } from 'react';

import Signup from "./containers/Authentication/Signup";
import CognitoSetup from "./containers/Authentication/CognitoSetup";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cognito: {}
        };
    }
    componentDidMount() {
        const cognito = JSON.parse(localStorage.getItem("aws-cognito"))
        this.setState({cognito})
    }
    render() {
        return (
            <div className="App">
            <Signup />
            <CognitoSetup/>
            </div>
        );
    }
}

export default App;
