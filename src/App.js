import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src="mj.jpeg" className="App-logo" alt="logo" />
        <header className="App-header">
          <ul className="header">
          <li><a href="/">Home</a></li>
            <li><a href="/">Plan your travel</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/">Sign Up</a></li>
            </ul>
        </header>

      </div>
    );
  }
}

export default App;
