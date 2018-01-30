import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import EncryptionContainer from './containers/Encryption/Encryption';
import FormattingContainer from './containers/Formatting/Formatting';
import TextProgressing from './containers/TextProgressing/TextProgressing';
import Index from './containers/Index/Index';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/encryption/" component={EncryptionContainer} />
          <Route exact path="/formatting/" component={FormattingContainer} />
          <Route exact path="/text_progressing/" component={TextProgressing} />
        </div>
      </Router>
    );
  }
}

export default App;
