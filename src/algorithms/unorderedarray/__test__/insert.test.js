const assert = require("assert");

// Import the insert function
const { insertV2: insert } = require("../insert");

// Test cases for the insert function
describe("Array", () => {
  describe("insert", function () {
    it("should insert value at the given index within valid range", function () {
      let arr = [1, 2, 3, 4, 5];
      assert.strictEqual(insert(arr, 2, 100), true);
      assert.deepStrictEqual(arr, [1, 2, 100, 4, 5, 3]);
    });

    it("should insert value at the end if index is equal to arr.length", function () {
      let arr = [1, 2, 3, 4, 5];
      assert.strictEqual(insert(arr, arr.length, 100), true);
      assert.deepStrictEqual(arr, [1, 2, 3, 4, 5, 100]);
    });

    it("should insert value at the beginning if index is 0", function () {
      let arr = [1, 2, 3, 4, 5];
      assert.strictEqual(insert(arr, 0, 100), true);
      assert.deepStrictEqual(arr, [100, 2, 3, 4, 5, 1]);
    });

    it("should return false and not modify the array if index is out of range", function () {
      let arr = [1, 2, 3, 4, 5];
      assert.strictEqual(insert(arr, -1, 100), false);
      assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);

      assert.strictEqual(insert(arr, arr.length + 1, 100), false);
      assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);
    });
  });
});
