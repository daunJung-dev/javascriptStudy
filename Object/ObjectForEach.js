function forEach(object, callback) {
    for(let i = 0; i < Object.keys(object).length; i++) {
        callback(Object.keys(object)[i], Object.values(object)[i]);
    }
};

module.exports = forEach;