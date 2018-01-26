import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from '../src/components/Layouts/Layout';
import Encryptions from "./containers/Encryptions";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Encryptions />
      // </div>
      <Router>
        <div>
          <Route exact path="/" component={Encryptions} />
          <Route exact path="/encryptions/" component={Encryptions} />
          <Route exact path="/topics/" component={MainLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
