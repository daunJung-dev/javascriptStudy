const filter = require('./ObjectFilter');

let object = { apple: 2000, banana: 3000, strawberry: 4000, watermelon:5000};

describe('object filter tests', () => {
    test("filter apple", () => {
        expect(filter(object, fruit => fruit === 'apple')).toEqual({banana: 3000, strawberry: 4000, watermelon:5000});
    })
})