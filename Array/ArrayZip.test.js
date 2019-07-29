const zip = require('./ArrayZip');

let obj1 = ['a', 'b'];
let obj2 = [1, 2];
let obj3 = [true, false];

describe('zip tests', () => {
    test('should is equal to value', () => {
        expect(zip(obj1, obj2, obj3)).toEqual([['a', 1, true], ['b', 2, false]]);
    });
});
