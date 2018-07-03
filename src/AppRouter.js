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
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/cognito-setup" component={CognitoSetup}/>
                    <Route path="/endpoints" component={EndpointForm}/>
                    <Route path="/verifyemail" component={VerifyEmail}/>
                </Switch>
        )
    }
}

export default AppRouter;