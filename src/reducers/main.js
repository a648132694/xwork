import { combineReducers } from 'redux';
import encryption from './encryption';

const mainReducer = combineReducers({
  encryption,
});

export default mainReducer;
