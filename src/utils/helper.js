// 检查数组的值(对象)是否包含某个键
export function getArrayObjectByObjectKey(array, objectKey) {
  for (const key in array) {
    if (array[key].key === objectKey) {
      return array[key];
    }
  }
}

/**
 * 检查是否需要存进历史记录
 *
 * @export
 * @param {string} input
 * @param {array} history
 */
export function checkNeedSaveToHistory(input, history) {
  if (history.length !== 0) {
    return input !== history[0].input;
  }
  return true;
}
