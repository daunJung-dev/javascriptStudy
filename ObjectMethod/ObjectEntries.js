function entries(object) {
    let result = [];
    let array = [];
    for (let i = 0; i < Object.keys(object).length; i++){
        array[0] = Object.keys(object)[i];
        array[1] = Object.values(object)[i];
        result[i] = array;
        array = [];
    }
    return result;
}
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(entries(anObj));

module.exports = entries;