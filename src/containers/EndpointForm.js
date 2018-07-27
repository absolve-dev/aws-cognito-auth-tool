import React, { Component } from 'react';
import CreatePostBody from "./CreatePostBody";
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
                {
                    (this.props.httpMethod === "POST" || this.props.httpMethod === "PUT") && 
                        <CreatePostBody 
                            handleChange={this.props.handleChange} 
                            body={this.props.body} 
                            bodyKey={this.props.bodyKey} 
                            bodyValue={this.props.bodyValue} 
                            addBodyItem={this.props.addBodyItem}
                            delBodyItem={this.props.delBodyItem}
                        />
                }
                <div className="select">
                    <select name="httpMethod" value={this.props.httpMethod} onChange={this.props.handleChange}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </div>
                <a className="button is-info" onClick={this.props.handleSubmit}>Submit</a>
                <a className="button is-danger" onClick={this.props.removeEndpointsInLocalStorage}>Delete All Endpoints</a>
            </div>
        )
    }
}

export default EndpointForm;