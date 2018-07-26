import React, { Component } from 'react';

class EndpointTags extends Component {
    render(){
        let endpointNames = []
        this.props.endpoints.forEach( endpoint => {
            if (!endpointNames.includes(endpoint.name)) {
                endpointNames.push(endpoint.name)
            }
        });
        
        return(
            endpointNames.map( (name, index) => 
                <span 
                    style={{ cursor:"pointer" }}
                    onClick={() => this.props.autoFillFormWithBaseEndpoint(name)}
                    key={index} 
                    className="tag is-success">
                    {name}
                </span>
            )
        )
    }
}
export default EndpointTags;