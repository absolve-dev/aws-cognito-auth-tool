import React, { Component } from 'react';
import 'bulma/css/bulma.css'


class CognitoSetup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userPoolId: "",
          userPoolWebClientId: "",
          identityPoolId: ""
        };
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
            </div>
        );
    }
}

export default CognitoSetup;
