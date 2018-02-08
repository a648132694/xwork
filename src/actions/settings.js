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

export function saveFunctionSwitchStatus(parentKey, childKey, check) {
  return {
    type: types.SAVE_FUNCTION_SWITCH_STATUS,
    payload: {
      parentKey,
      childKey,
      check,
    },
  };
}

export function handleSaveFunctionSwitchStatus(parentKey, childKey, check) {
  return (dispatch) => {
    dispatch(saveFunctionSwitchStatus(parentKey, childKey, check));
  };
}

/**
 * 保存喜爱情况
 *
 * @export
 * @param {string} functionName
 * @param {bool} isFavourite
 * @returns
 */
export function saveFavouriteFunction(functionName, isFavourite) {
  return {
    type: types.SAVE_FAVOURITE_FUNCTION,
    payload: {
      functionName,
      isFavourite,
    },
  };
}

export function handleSaveFavouriteFunction(functionName, isFavourite) {
  return (dispatch) => {
    dispatch(saveFavouriteFunction(functionName, isFavourite));
  };
}
