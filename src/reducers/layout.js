import initialState from '../reducers/initialState';
import * as types from '../constants/layout';

export default function(state = initialState.layout, action) {
  switch (action.type) {
    case types.SAVE_MENU_SELECT_KEYS:
      return {
        ...state,
        menuSelectKeys: action.payload.menuSelectKeys,
      };
    default:
      return state;
  }
}
