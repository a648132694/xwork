import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from '../src/components/Layouts/Layout';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainLayout} />
          <Route path="/about" component={MainLayout} />
          <Route path="/topics" component={MainLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
