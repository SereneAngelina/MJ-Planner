import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src="amsterdam.jpg" className="App-logo" alt="logo" />
        <header className="App-header">
          <ul className="header">
          <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Planner</a></li>
            <li><a href="/">Contact</a></li>
            </ul>
        </header>

      </div>
    );
  }
}

export default App;
