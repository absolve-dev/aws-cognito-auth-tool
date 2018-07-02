import React, { Component } from 'react';
import 'bulma/css/bulma.css'


class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          confirmPassword: "",

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
            </div>
        );
    }
}

export default Signup;
