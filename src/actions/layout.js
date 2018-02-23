import * as types from '../constants/layout';

export function saveMenuSelectKeys(key) {
  return {
    type: types.SAVE_MENU_SELECT_KEYS,
    payload: {
      menuSelectKeys: key,
    },
  };
}

export function handleSaveMenuSelectKeys(key) {
  return (dispatch) => {
    dispatch(saveMenuSelectKeys(key));
  };
}
