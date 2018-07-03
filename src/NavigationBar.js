import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return(
            <nav className="navbar" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Tools
                    </a>
                    <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/">
                        Login
                    </Link>
                    <Link className="navbar-item" to="/signup">
                        Sign Up
                    </Link>
                    <Link className="navbar-item" to="/endpoints">
                        Endpoints
                    </Link>
                    <Link className="navbar-item" to="/verifyemail">
                        Verify Email
                    </Link>
                    <Link className="navbar-item" to="/cognitosetup">
                        Cognito Settings
                    </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar;