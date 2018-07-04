import React, { Component } from 'react';

import AppRouter from "./AppRouter";
import { amplifyConfig, LoadEndpointsFromLocalStorage } from "./config/AmplifyConfig";
import './App.css';
import NavigationBar from "./NavigationBar";
import Amplify from "aws-amplify";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cognito: {}
        };
    }
    componentDidMount() {
        const cognito = JSON.parse(localStorage.getItem("cognito"))
        this.setState({cognito})
        amplifyConfig(cognito)
        LoadEndpointsFromLocalStorage()
        console.log(Amplify.configure())
    }
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <AppRouter />
            </div>
        );
    }
}

export default App;
