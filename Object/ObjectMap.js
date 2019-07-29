function map(object, callback) {
    let result = {};
    for (let i = 0; i < Object.keys(object).length; i++) {
        result[Object.keys(object)[i]] = callback(Object.keys(object)[i], Object.values(object)[i], i, object);
    }
    return result;
}

module.exports = map;