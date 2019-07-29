const reduce = require('./ObjectReduce');

let object = { apple: 2000, banana: 3000, strawberry: 4000, watermelon:5000};

describe('reduce tests', () => {
    test('object reduce sum', () => {
        expect(
            reduce(object, (acc, cur) => acc + cur)
        ).toEqual(14000);
    });
    test('reduce transform to array', () => {
        expect(
            reduce(object, (acc, cur, idx, src) => {
                acc[idx] = Object.keys(src)[idx];
                return acc;
            }, [])
        ).toEqual(['apple', 'banana', 'strawberry', 'watermelon']);
    })
})
