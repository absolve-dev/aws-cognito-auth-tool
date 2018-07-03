import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import EndpointLists from "./EndpointLists";

class EndpointForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          baseUrl: "",
          endpoint: "",
          httpMethod: "GET",
          endpoints: []
        };
    }

    componentDidMount(){
        const endpoints = this.getEndpointsInLocalStorage()
        if(endpoints){
            this.setState({endpoints})
        }
    }

    getEndpointsInLocalStorage = () => {
        return JSON.parse(localStorage.getItem("endpoints"))
    }

    setEndpointsInLocalStorage = (endpoints) => {
        localStorage.setItem("endpoints",JSON.stringify(endpoints))
        return this.getEndpointsInLocalStorage()
    }

    removeEndpointsInLocalStorage = () => {
        this.setState({endpoints:[]})
        localStorage.removeItem("endpoints")
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            endpoint: "",
            endpoints: [
                ...this.state.endpoints,
                {
                    httpMethod: this.state.httpMethod,
                    endpointUrl: this.state.baseUrl + this.state.endpoint,
                    name: this.state.name
                }
            ]
        },()=>{
            this.setEndpointsInLocalStorage(this.state.endpoints)
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <h1 className="title">EndpointForm</h1>
                <div className="field">
                    <div className="control">
                        <input
                            type="text" 
                            className="input is-info" 
                            placeholder="name"
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input
                            type="text" 
                            className="input is-info" 
                            placeholder="baseUrl"
                            name="baseUrl" 
                            value={this.state.baseUrl} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            type="text" 
                            className="input is-info" 
                            placeholder="endpoint"
                            name="endpoint" 
                            value={this.state.endpoint} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="select">
                    <select name="httpMethod" value={this.state.httpMethod} onChange={this.handleChange}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </div>
                <a className="button is-info" onClick={this.handleSubmit}>Submit</a>
                <a className="button is-danger" onClick={this.removeEndpointsInLocalStorage}>Delete All Endpoints</a>
                <EndpointLists endpoints={this.state.endpoints}/>
            </div>
        );
    }
}

export default EndpointForm;
