import React, { Component } from 'react';

class EndpointForm extends Component {
    render(){
        return(
            <div>
                <div className="field">
                    <div className="control">
                        <input
                            type="text" 
                            className="input is-info" 
                            placeholder="name"
                            name="name" 
                            value={this.props.name} 
                            onChange={this.props.handleChange} 
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
                            value={this.props.baseUrl} 
                            onChange={this.props.handleChange} 
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
                            value={this.props.endpoint} 
                            onChange={this.props.handleChange} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EndpointForm;