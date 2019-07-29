const forEach = require('./ArrayForEach');

let array = ['사과', '배', '딸기', '바나나', '레몬'];

test('forEach double', () => {
    const result = [];
    forEach(array, fruit => {
        result.push(fruit+fruit);
    });
    expect(result).toEqual(['사과사과', '배배', '딸기딸기', '바나나바나나', '레몬레몬']);
})

test('Should not return any values', () => {
    const result = forEach(array, fruit => fruit+fruit);
    expect(result).not.toEqual(['사과사과', '배배', '딸기딸기', '바나나바나나', '레몬레몬']);
    expect(result).toBe(undefined);
});

