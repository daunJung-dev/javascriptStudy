function filter(object, callback) {
    let result = {};
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (!callback(Object.keys(object)[i], Object.values(object)[i])) {
            result[Object.keys(object)[i]] = Object.values(object)[i];
        }
    }
    return result;
}

module.exports = filter;