import React, { Component } from 'react';
import './App.css';
import Encryptions from "./containers/Encryptions";
import Formatting from "./containers/Formatting";
import TextProgressing from "./containers/TextProgressing";
import Index from "./containers/Index";
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Encryptions />
      // </div>
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/encryptions/" component={Encryptions} />
          <Route exact path="/formatting/" component={Formatting} />
          <Route exact path="/text_progressing/" component={TextProgressing} />
        </div>
      </Router>
    );
  }
}

export default App;
