import React, { Component } from 'react';
// 注意:开发谷歌扩展要用HashRouter
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import EncryptionContainer from './containers/Encryption/Encryption';
import FormattingContainer from './containers/Formatting/Formatting';
import SettingsContainer from './containers/Settings/Settings';
import TextProgressing from './containers/TextProgressing/TextProgressing';
import FavouriteContainer from './containers/Favourite/Favourite';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FavouriteContainer} />
          <Route exact path="/favourite" component={FavouriteContainer} />
          <Route exact path="/encryption/" component={EncryptionContainer} />
          <Route exact path="/formatting/" component={FormattingContainer} />
          <Route exact path="/text_progressing/" component={TextProgressing} />
          <Route exact path="/settings/" component={SettingsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
