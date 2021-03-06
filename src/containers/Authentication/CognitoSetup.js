import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { amplifyConfig } from "../../config/AmplifyConfig";
import CognitoDetails from "../CognitoDetails";
class CognitoSetup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            region: "",
            userPoolId: "",
            userPoolWebClientId: "",
            identityPoolId: "",
        };
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.region === "" &&
            this.state.userPoolId === "" && 
            this.state.userPoolWebClientId === "" && 
            this.state.identityPoolId === "" ) {
                return
        }
        localStorage.setItem("cognito",JSON.stringify(this.state))
        amplifyConfig(this.state)
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <h1 className="title">CognitoSetup</h1>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-info" 
                            placeholder="region"
                            name="region" 
                            value={this.state.region}
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-info" 
                            placeholder="userPoolId"
                            name="userPoolId" 
                            value={this.state.userPoolId}
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-info" 
                            placeholder="userPoolWebClientId"
                            name="userPoolWebClientId" 
                            value={this.state.userPoolWebClientId} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-info" 
                            placeholder="identityPoolId"
                            name="identityPoolId" 
                            value={this.state.identityPoolId} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <a className="button is-info" onClick={this.handleSubmit}>Submit</a>
                <CognitoDetails cognito={this.props.cognito}/>
            </div>
        );
    }
}

export default CognitoSetup;
