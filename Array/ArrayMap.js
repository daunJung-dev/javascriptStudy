function map(array, callback) {
    let result =[];
    let idx = 0;
    for (let i = 0; i < array.length; i++) {
        result[idx] = callback(array[i], i);
        idx++;
    };
    return result;
};
module.exports = map;