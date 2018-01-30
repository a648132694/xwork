import * as type from '../constants/encryption';

export function saveMD5Input(input) {
  const action = {
    type: type.SAVE_MD5_ENCRYPTION_INPUT,
    payload: {
      MD5Input: input,
    },
  };
  return action;
}

export function handleSaveMD5Input(input) {
  return function (dispatch) {
    dispatch(saveMD5Input(input));
  };
}

export function saveMD5Result(result) {
  const action = {
    type: type.SAVE_MD5_ENCRYPTION_RESULT,
    payload: {
      MD5Result: result,
    },
  };
  return action;
}

export function handleSaveMD5Result(result) {
  return function (dispatch) {
    dispatch(saveMD5Result(result));
  };
}

