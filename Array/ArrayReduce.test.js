const reduce = require("./ArrayReduce");

let array = [2, 3, 4, 5, 7];
let array2 = ["사과", 1, "포도", 4, "딸기", 5, "바나나", 7];

describe("reduce tests", () => {
  test("reduce sum", () => {
    expect(
      reduce(array, (accumulator, currentValue) => accumulator + currentValue)
    ).toEqual(21);
  });

  test("reduce distribute fruitObject", () => {
    expect(
      reduce(
        array2,
        (acc, cur, idx, src) => {
          if (isNaN(cur)) {
            acc[cur] = src[idx + 1];
            return acc;
          }
          return acc;
        },
        {}
      )
    ).toEqual({ 사과: 1, 포도: 4, 딸기: 5, 바나나: 7 });
  });
  test('reduce map double', () => {
      expect(
          reduce(array2, (acc, cur, idx) => {
              acc[idx] = cur + cur;
              return acc;
          },
          [])
      ).toEqual(['사과사과', 2, '포도포도', 8, '딸기딸기', 10, '바나나바나나', 14]);
  });
});
