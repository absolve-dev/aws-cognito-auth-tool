import React, { Component } from 'react';

import AppRouter from "./AppRouter";
import { amplifyConfig } from "./amplifyConfig";
import './App.css';
import NavigationBar from "./NavigationBar";

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
