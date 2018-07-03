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
                            <div class="container" key={index}>
                                <div class="notification">
                                    <div>
                                        <strong>{endpoint.httpMethod}</strong> <span>{endpoint.endpointUrl}</span>
                                    </div>
                                    <a 
                                        className="button is-info" 
                                        onClick={()=>this.handleFetch(endpoint.httpMethod,endpoint.endpointUrl)}>Submit
                                    </a>
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
