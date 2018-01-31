import * as types from '../constants/settings';
import initialState from './initialState';

export default function (state = initialState.settings, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS:
      return state;
    default:
      return state;
  }
}
