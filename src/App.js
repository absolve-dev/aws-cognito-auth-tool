import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AppRouter from "./AppRouter";
import { amplifyConfig, LoadEndpointsFromLocalStorage } from "./config/AmplifyConfig";
import './App.css';
import NavigationBar from "./NavigationBar";
import Amplify from "aws-amplify";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cognito: {},
          redirectToCognitoSettings: false,
        };
    }
    componentDidMount() {
        const cognito = JSON.parse(localStorage.getItem("cognito"))
        if (cognito === null){
            this.setState({redirectToCognitoSettings:true})
        } else {
            this.setState({cognito, redirectToCognitoSettings: false})
            amplifyConfig(cognito)
            LoadEndpointsFromLocalStorage()
        }
        console.log(Amplify.configure())
    }

    render() {
        if (this.state.redirectToCognitoSettings && window.location.pathname!=="/cognitosetup"){
            return(
                <Redirect to="/cognitosetup" />
            )
        }
        return (
            <div className="App">
                <NavigationBar />
                <AppRouter appState={this.state}/>
            </div>
        );
    }
}

export default App;
