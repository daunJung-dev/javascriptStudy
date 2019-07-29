const filter = require('./ArrayFilter.js');

let array = ['사과', '배', '딸기', '바나나', '레몬'];

describe('filter tests', () => {
    it('filter lemon', () => {
        expect(filter(array, fruit => fruit !== '레몬')).toEqual(['사과', '배', '딸기', '바나나']);
    })
})