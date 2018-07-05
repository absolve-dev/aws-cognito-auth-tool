import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import EndpointLists from "./EndpointLists";
import EndpointResponse from "./EndpointResponse";
import CreatePostBody from "./CreatePostBody";
import { AddEndpointToAmplify } from "../config/AmplifyConfig.js";

class EndpointForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          baseUrl: "",
          endpoint: "",
          httpMethod: "GET",
          endpoints: [],
          body: {},
          bodyKey: "",
          bodyValue: "",
          response: null
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
        this.setState({endpoints})
        localStorage.setItem("endpoints",JSON.stringify(endpoints))
        return this.getEndpointsInLocalStorage()
    }

    removeEndpointsInLocalStorage = () => {
        this.setState({endpoints:[]})
        localStorage.removeItem("endpoints")
    }

    addBodyItem = () => {
        if (this.state.bodyKey === "" &&
            this.state.bodyValue === "" ){
                return
            }
        this.setState({
            bodyKey: "",
            bodyValue: "",
            body: {
                ...this.state.body,
                [this.state.bodyKey]: this.state.bodyValue
            }
        })
    }
    delBodyItem = delItemKey => {
        let newBodyItems = {}
        for(let key in this.state.body){
            if (this.state.body.hasOwnProperty(key)) {
                if(key !== delItemKey){
                    newBodyItems = {
                        ...newBodyItems,
                        [key]: this.state.body[key]
                    }
                }
            }
        }
        this.setState({ body: newBodyItems })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.name === "" ||
            this.state.baseUrl === "" ||
            this.state.httpMethod === "" ||
            this.state.endpoint === "" ){
                return
            }
        const newEndpoint = {
            name: this.state.name,
            baseUrl: this.state.baseUrl,
            endpointUrl: this.state.endpoint,
            httpMethod: this.state.httpMethod,
        }
        this.setState({
            endpoint: "",
            endpoints: [
                ...this.state.endpoints,
                newEndpoint
            ]
        },()=>{
            this.setEndpointsInLocalStorage(this.state.endpoints)
            AddEndpointToAmplify(newEndpoint)
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleResponse = response => {
        this.setState({response})
    }
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
                {
                    (this.state.httpMethod === "POST" || this.state.httpMethod === "PUT") && 
                        <CreatePostBody 
                            handleChange={this.handleChange} 
                            body={this.state.body} 
                            bodyKey={this.state.bodyKey} 
                            bodyValue={this.state.bodyValue} 
                            addBodyItem={this.addBodyItem}
                            delBodyItem={this.delBodyItem}
                        />
                }
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
                <EndpointResponse response={this.state.response} />
                <EndpointLists 
                    endpoints={this.state.endpoints}
                    handleResponse={this.handleResponse}
                    getEndpointsInLocalStorage={this.getEndpointsInLocalStorage}
                    setEndpointsInLocalStorage={this.setEndpointsInLocalStorage}
                />
            </div>
        );
    }
}

export default EndpointForm;
