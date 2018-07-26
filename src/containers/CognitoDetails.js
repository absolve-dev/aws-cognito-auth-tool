import React, {Component} from 'react';

class CognitoDetails extends Component {

    
    render() {
        return(
            <div className="container is-fullhd">
                <div className="notification flex-space-between" >
                    <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                        Cognito Settings
                        </p>
                    </header>
                    <div className="card-content">
                        <p className="text-align-left"><strong>region: </strong>{this.props.cognito.region}</p>
                        <p className="text-align-left"><strong>identityPoolId: </strong>{this.props.cognito.identityPoolId}</p>
                        <p className="text-align-left"><strong>userPoolId: </strong>{this.props.cognito.userPoolId}</p>
                        <p className="text-align-left"><strong>userPoolWebClientId: </strong>{this.props.cognito.userPoolWebClientId}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CognitoDetails;
