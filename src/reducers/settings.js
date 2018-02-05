import * as types from '../constants/settings';
import initialState from './initialState';

export default function (state = initialState.settings, action) {
  switch (action.type) {
    case types.LOAD_SETTINGS:
      return state;
    case types.SAVE_FUNCTION_SWITCH_STATUS: {
      const { parentKey, childKey, check } = action.payload;
      const { functions } = state;
      functions[parentKey].children[childKey].status = check;
      functions[parentKey] = changeParentStatus(functions[parentKey]);
      return {
        ...state,
        functions,
      };
    }
    default:
      return state;
  }
}

/**
 *
 *检查子项目是不是所有 status 都为false，是的话同时也要将父项目的 status 设为 false,favourite项除外
 *如果子项目有一项或以上的 status 为 true，父项目则要设置为 true
 * @param {object} object
 * @returns {object} object
 */
function changeParentStatus(object) {
  // 是否需要将父项 status 设置为 true
  let flag;
  for (const key in object.children) {
    if (object.children[key].status) {
      flag = true;
      break;
    }
    flag = false;
  }
  if (object.key === 'favourite')flag = true;
  object.status = !!flag;
  return object;
}
