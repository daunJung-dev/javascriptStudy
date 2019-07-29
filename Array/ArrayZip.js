function zip(...Array) {
    let stack = [];
    let res = [];
    for (let i = 0; i < Array[0].length; i++) {
        for(let j = 0; j < Array.length; j++) {
            res.push(Array[j][i]);
        }
        stack[i] = res;
        res = [];
    }
    return stack;
}
module.exports = zip;