import * as types from '../constants/encryption';

export function saveMD5Input(input) {
  return {
    type: types.SAVE_MD5_ENCRYPTION_INPUT,
    payload: {
      MD5Input: input,
    },
  };
}

export function handleSaveMD5Input(input) {
  return (dispatch) => {
    dispatch(saveMD5Input(input));
  };
}

export function saveMD5Result(result) {
  return {
    type: types.SAVE_MD5_ENCRYPTION_RESULT,
    payload: {
      MD5Result: result,
    },
  };
}

export function saveMD5RecordToHistory(input, result) {
  const record = { input, result };
  return {
    type: types.SAVE_MD5_RECORD_TO_HISTORY,
    payload: { record },
  };
}

export function handleSaveMD5RecordToHistory(input, result) {
  return (dispatch) => {
    dispatch(saveMD5RecordToHistory(input, result));
  };
}

export function handleSaveMD5Result(result) {
  return (dispatch) => {
    dispatch(saveMD5Result(result));
  };
}

export function saveTabPosition(key) {
  return {
    type: types.SAVE_TAB_POSITION,
    payload: {
      tabPosition: key,
    },
  };
}

export function handleSaveTabPosition(key) {
  return (dispatch) => {
    dispatch(saveTabPosition(key));
  };
}

