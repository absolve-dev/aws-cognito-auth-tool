import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import { Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'


class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          redirect: false
        };
    }
    handleSubmit = async event => {
        event.preventDefault()
        if (this.email === "" &&
            this.password === ""){
                return
            }
        try {
            const response = await Auth.signUp({
                username: this.state.email.toLowerCase(),
                password: this.state.password
            });
            console.log(response);
            this.setState({redirect:true})
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
        if (this.state.redirect){
            return (
                <Redirect to={{
                    pathname: "/verifyemail", 
                    state:{
                        email: this.state.email
                    }}} 
                />
            )
        }
        return (
            <div className="App">
                <h1 className="title">User Signup Info</h1>
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
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-primary" 
                            placeholder="Password"
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <a className="button is-info" onClick={this.handleSubmit}>Submit</a>
            </div>
        );
    }
}

export default Signup;
