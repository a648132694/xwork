import initialState from '../reducers/initialState';
import * as types from '../constants/encryption';

export default function(state = initialState.encryption, action) {
  switch (action.type) {
    case types.SAVE_MD5_ENCRYPTION_INPUT:
      return {
        ...state,
        MD5: action.payload.MD5Input,
      };
    default:
      return state;
  }
}
