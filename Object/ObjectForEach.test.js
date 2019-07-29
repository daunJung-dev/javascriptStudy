const forEach = require('./ObjectForEach');

let object = { apple: 2000, banana: 3000, strawberry: 4000, watermelon:5000};

describe('forEach tests', () => {
    test('object forEach double', () => {
        const result = {};
        forEach(object, (fruit, price) => {
            result[fruit] = price * 2;
        });
        expect(result).toEqual({apple: 4000, banana: 6000, strawberry: 8000, watermelon: 10000});
    });

    test('Should not return any values', () => {
        const result = forEach(object, (fruit, price) => {
            return price + price;
        });
        expect(result).not.toEqual({apple: 4000, banana: 6000, strawberry: 8000, watermelon: 10000});
        expect(result).toBe(undefined);
    })
})
