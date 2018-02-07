import initialState from '../reducers/initialState';
import * as types from '../constants/encryption';

export default function (state = initialState.encryption, action) {
  switch (action.type) {
    case types.SAVE_MD5_ENCRYPTION_INPUT:
      return {
        ...state,
        MD5: {
          ...state.MD5,
          input: action.payload.MD5Input,
        },
      };
    case types.SAVE_MD5_ENCRYPTION_RESULT:
      return {
        ...state,
        MD5: {
          ...state.MD5,
          result: action.payload.MD5Result,
        },
      };
    case types.SAVE_TAB_POSITION:
      return {
        ...state,
        tabPosition: action.payload.tabPosition,
      };
    case types.SAVE_MD5_RECORD_TO_HISTORY:
      state.MD5.history.unshift(action.payload.record);
      return {
        ...state,
      };
    default:
      return state;
  }
}
