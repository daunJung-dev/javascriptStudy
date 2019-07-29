const assign = require('./ObjectAssign');

let target = {a: 1, b: 2};
let source = {b: 4, c: 5};

describe('assign tests', () => {
    test('public assign test', () => {
        expect(assign(target, source)).toEqual({a:1, b:4, c:5});
    });
})