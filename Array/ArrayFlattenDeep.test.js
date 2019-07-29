const flattenDeep = require("./ArrayFlattenDeep");

describe("flattenDeep tests", () => {
  test("should return same array", () => {
    let array = [1, [2, [3, [4]], 5]];
    expect(flattenDeep(array)).toEqual([1, 2, 3, 4, 5]);
  });
});
