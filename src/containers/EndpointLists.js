import React, { Component } from 'react';
import 'bulma/css/bulma.css'

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

    handleFetch = (httpMethod,endpointUrl) => {
        console.log(httpMethod,endpointUrl);   
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
                            <div key={index}>
                            <h1>{endpoint.httpMethod}</h1>
                            <h2>{endpoint.endpointUrl}</h2>
                            <a 
                                className="button is-info" 
                                onClick={()=>this.handleFetch(endpoint.httpMethod,endpoint.endpointUrl)}>Submit</a>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default EndpointLists;
