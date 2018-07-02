import React, { Component } from 'react';

import Signup from "./containers/Authentication/Signup";
import CognitoSetup from "./containers/Authentication/CognitoSetup";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
        <CognitoSetup/>
      </div>
    );
  }
}

export default App;
