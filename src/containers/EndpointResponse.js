import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class EndpointResponse extends Component {
    render() {
        return (
            <div className="App">
            {
                this.props.response &&
                <div>
                    <h1 className="title">Endpoint Response</h1>
                    <strong>{JSON.stringify(this.props.response, undefined, 2)}</strong>
                </div>
            }
            </div>
        );
    }
}

export default EndpointResponse;
