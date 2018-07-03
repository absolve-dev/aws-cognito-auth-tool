import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./containers/Authentication/Signup";
import CognitoSetup from "./containers/Authentication/CognitoSetup";
import EndpointForm from "./containers/EndpointForm";

class AppRouter extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Signup}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/cognito-setup" component={CognitoSetup}/>
                    <Route path="/endpoints" component={EndpointForm}/>
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;