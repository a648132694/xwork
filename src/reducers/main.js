import { combineReducers } from 'redux';
import encryption from './encryption';
import layout from './layout';

const mainReducer = combineReducers({
  encryption,
  layout,
});

export default mainReducer;
