import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { API } from "aws-amplify";

class EndpointLists extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          baseUrl: "https://api.spotrevolution.net",
          endpoint: "",
          httpMethod: "GET",
          endpoints: []
        };
    }

    handleFetch = async (endpoint) => {
        let myInit = {
            response: true,
        }
        if (endpoint.body!==null) {
            myInit.body = endpoint.body
        }
        try {
            let response
            if (endpoint.httpMethod === "GET") {
                response = await API.get(endpoint.name,endpoint.endpointUrl,myInit)
            } else if (endpoint.httpMethod === "POST") {
                response = await API.post(endpoint.name,endpoint.endpointUrl,myInit)
            } else if (endpoint.httpMethod === "PUT") {
                response = await API.put(endpoint.name,endpoint.endpointUrl,myInit)
            } else if (endpoint.httpMethod === "DELETE"){
                response = await API.del(endpoint.name,endpoint.endpointUrl,myInit)
            }
            this.props.handleResponse(response)
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
                <h1 className="title">Endpoints To Test</h1>
                {
                    this.props.endpoints.length === 0 ? null:
                    this.props.endpoints.map( (endpoint,index) => {
                        return (
                            <div className="container mrgnBtm10" key={index}>
                                <div className="notification flex-space-between" >
                                    <div>
                                        <strong>{endpoint.httpMethod}</strong> <span>{endpoint.baseUrl + endpoint.endpointUrl}</span>
                                    </div>
                                    <div>
                                    <a 
                                        className="button is-info" 
                                        onClick={()=>this.handleFetch(endpoint)}>Submit
                                    </a>
                                    <a 
                                        className="button is-primary" 
                                        onClick={()=>this.props.handleEditEndpoint(index)}>Edit
                                    </a>
                                    <a 
                                        className="button is-danger" 
                                        onClick={()=>this.props.handleDeleteEndpoint(index)}>Delete
                                    </a>
                                    </div>
                                </div>
                            </div>                           
                        )
                    })
                }
            </div>
        );
    }
}

export default EndpointLists;
