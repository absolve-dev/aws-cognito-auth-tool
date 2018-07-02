import React, { Component } from 'react';

import Signup from "./containers/Authentication/Signup";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
