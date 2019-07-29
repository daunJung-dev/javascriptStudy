function reduce (object, callback, initValue) {
    let acc = initValue ? initValue : Object.values(object)[0];
    for(let i = initValue ? 0 : 1; i < Object.keys(object).length; i++) {
        acc = callback(acc, Object.values(object)[i], i, object);
    }
    return acc;
};

module.exports = reduce;