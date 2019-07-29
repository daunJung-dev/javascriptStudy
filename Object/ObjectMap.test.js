const map = require('./ObjectMap');

let object = { apple: 2000, banana: 3000, strawberry: 4000, watermelon:5000};

describe('object map tests', () => {
    test('map double', () => {
        expect(map(object, (fruit, price) => {
            if (fruit === 'apple') {
                return price * 2;
            }
            return price * 3;
        })).toEqual({apple: 4000, banana: 9000, strawberry: 12000, watermelon: 15000});
    });
})
