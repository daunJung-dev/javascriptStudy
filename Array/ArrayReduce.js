function reduce(array, callback, initValue) {
  let acc = initValue ? initValue : array[0];
  for (let i = initValue ? 0 : 1; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}
module.exports = reduce;
