const entries = require('./ObjectEntries');

describe('entries tests', () => {
    test('public entries test', () => {
        const obj = {foo: 'bar', baz: 42};
        expect(entries(obj)).toEqual([['foo','bar'], ['baz', 42]]);
    });
    test('public entries test', () => {
        const obj = { 0: 'a', 1: 'b', 2: 'c' };
        expect(entries(obj)).toEqual([ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]);
    });
    test('public entries test', () => {
        const anObj = { 100: 'a', 2: 'b', 7: 'c' };
        expect(entries(anObj)).toEqual([ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]);
    });
})
