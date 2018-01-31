import { combineReducers } from 'redux';
import encryption from './encryption';
import layout from './layout';
import settings from './settings';

const mainReducer = combineReducers({
  encryption,
  layout,
  settings,
});

export default mainReducer;
