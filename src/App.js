import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Quote from './components/quote';
import './components/tweet.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h3 className="header1">Random Quote Machine</h3>
      <Quote/>
      
        <div className="App-header">
        </div>
      </div>
    );
  }
}

export default App;