import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import AppRouter from "./AppRouter";
import { amplifyConfig, LoadEndpointsFromLocalStorage } from "./config/AmplifyConfig";
import './App.css';
import NavigationBar from "./NavigationBar";
import Amplify, { Auth } from "aws-amplify";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          cognito: {},
          redirectToCognitoSettings: false,
          isAuthenticated:false
        };
    }
    async componentDidMount() {
        const cognito = JSON.parse(localStorage.getItem("cognito"))
        if (cognito === null){
            this.setState({redirectToCognitoSettings:true})
        } else {
            this.setState({cognito, redirectToCognitoSettings: false})
            amplifyConfig(cognito)
            LoadEndpointsFromLocalStorage()
            try{
                if(await Auth.currentSession()){
                    this.userHasAuthenticated(true)
                }
            } catch (error){
                if (error !== 'No current user') {
                    console.log(error);
                } else if (error === "No current user"){
                    this.userHasAuthenticated(false)
                }
            }

        }
        console.log(Amplify.configure())
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };

    userLogout = () => {
        Auth.signOut()
        this.setState({isAuthenticated: false})
    }

    render() {
        if (this.state.redirectToCognitoSettings && window.location.pathname!=="/cognitosetup"){
            return(
                <Redirect to="/cognitosetup" />
            )
        }
        return (
            <div className="App">
                <NavigationBar appState={this.state} userLogout={this.userLogout} />
                <AppRouter appState={this.state} userHasAuthenticated={this.userHasAuthenticated}/>
            </div>
        );
    }
}

export default App;
