
//const result = array.filter(fruit => fruit !== '딸기' || fruit !== '바나나');
function filter (array, callback) {
    let result = [];
    let idx=0;
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            result[idx] = array[i];
            idx++;
        };    
    }
    return result;
}
module.exports = filter;
// let result = filter(array, (fruit, index) => index !== 0);

// console.log(result);
