import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./containers/Authentication/Login";
import Signup from "./containers/Authentication/Signup";
import CognitoSetup from "./containers/Authentication/CognitoSetup";
import EndpointForm from "./containers/EndpointForm";
import VerifyEmail from './containers/Authentication/VerifyEmail';

class AppRouter extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" render={ props => <Login {...props} userHasAuthenticated={this.props.userHasAuthenticated} />}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/cognitosetup" render={ props => <CognitoSetup {...props} cognito={this.props.appState.cognito} />} />
                <Route path="/endpoints" component={EndpointForm}/>
                <Route path="/verifyemail" component={VerifyEmail}/>
            </Switch>
        )
    }
}

export default AppRouter;