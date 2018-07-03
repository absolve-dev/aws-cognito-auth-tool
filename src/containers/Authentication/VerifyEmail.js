import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import { Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'


class VerifyEmail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          verificationCode: "",
          redirect: ""
        };
    }
    handleSubmit = async event => {
        event.preventDefault()
        if (this.state.email === "" &&
            this.state.verificationCode === "" ){
                return
            }
        try {     
            const response = await Auth.confirmSignUp(this.state.email.toLowerCase(),this.state.verificationCode);
            console.log(response);
        } catch (error) {
            console.log(error);  
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
            <div className="App">
                <h1 className="title">Verify Email</h1>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-primary" 
                            placeholder="Email"
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-primary" 
                            placeholder="VerificationCode"
                            name="verificationCode" 
                            value={this.state.verificationCode}
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <a className="button is-info" onClick={this.handleSubmit}>Submit</a>
            </div>
        );
    }
}

export default VerifyEmail;
