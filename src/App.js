import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Encryption from './containers/Encryption';
import Formatting from './containers/Formatting';
import TextProgressing from './containers/TextProgressing';
import Index from './containers/Index';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/encryption/" component={Encryption} />
          <Route exact path="/formatting/" component={Formatting} />
          <Route exact path="/text_progressing/" component={TextProgressing} />
        </div>
      </Router>
    );
  }
}

export default App;
