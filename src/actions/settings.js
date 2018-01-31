import * as types from '../constants/settings';

export function loadSettings() {
  return {
    type: types.LOAD_SETTINGS,
  };
}

export function handleLoadSettings() {
  return (dispatch) => {
    dispatch(loadSettings());
  };
}
