import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from '../src/components/Layouts/Layout';

class App extends Component {
  render() {
    return (
      // <div className="App">
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/Appsss.js</code> and save to reload.
        </p> */}
        <MainLayout />
      </div>
    );
  }
}

export default App;
