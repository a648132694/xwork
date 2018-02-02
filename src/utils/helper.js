// 检查数组的值(对象)是否包含某个键
export function getArrayObjectByObjectKey(array, objectKey) {
  for (const key in array) {
    if (array[key].key === objectKey) {
      return array[key];
    }
  }
}
