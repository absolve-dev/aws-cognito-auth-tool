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
            <div className="tags">
                {
                    endpointNames.map( (name, index) => 
                        <span 
                            key={index}
                            className="tag is-info"
                            style={{ cursor:"pointer" }}
                            onClick={() => this.props.autoFillFormWithBaseEndpoint(name)}>
                            {name}
                        </span>
                    )
                }
            </div>
        )
    }
}
export default EndpointTags;