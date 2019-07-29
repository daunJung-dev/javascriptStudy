const map = require('./ArrayMap');

let array = ['사과', '배', '딸기', '바나나', '레몬'];

describe('map tests', () => {
    test('map double', () => {
        expect(map(array, fruit => {
            return fruit + fruit;
        })).toEqual(['사과사과', '배배', '딸기딸기', '바나나바나나', '레몬레몬']);
    });
    test('Should return value', () => {
        const result = map(array, fruit => fruit+fruit);
        expect(result).toEqual(['사과사과', '배배', '딸기딸기', '바나나바나나', '레몬레몬']);
        expect(result).not.toBe(undefined);
    });
})
