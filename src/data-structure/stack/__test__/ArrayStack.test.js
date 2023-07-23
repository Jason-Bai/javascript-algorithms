const assert = require("assert");
const ArrayStack = require("../ArrayStack");

describe("ArrayStack", function () {
  describe("#push()", function () {
    it("count should be 1, when push 1 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      assert.equal(as.count, 1);
    });

    it("count should be 2, when push 1, 2 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      assert.equal(as.count, 2);
    });

    it("count should be 3, when push 1, 2, 3 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      as.push(3);
      assert.equal(as.count, 3);
    });

    it("count should be 4, when push 1, 2, 3, 3 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      as.push(3);
      as.push(3);
      assert.equal(as.count, 4);
    });

    it("count should be 3, when push 1, 2, 3, 3 into stack", () => {
      const as = new ArrayStack(3);
      as.push(1);
      as.push(2);
      as.push(3);
      as.push(3);
      assert.equal(as.count, 3);
    });
  });
  describe("#pop()", function () {
    it("count should be 1, when push 1, 2, 3 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      as.push(3);
      as.pop();
      as.pop();
      assert.equal(as.count, 1);
    });

    it("count should be 0, when push 1, 2, 3 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      as.push(3);
      as.pop();
      as.pop();
      as.pop();
      assert.equal(as.count, 0);
    });

    it("count should be 0, when push 1, 2, 3 into stack", () => {
      const as = new ArrayStack(10);
      as.push(1);
      as.push(2);
      as.push(3);
      as.pop();
      as.pop();
      as.pop();
      as.pop();
      assert.equal(as.count, 0);
    });

    it("count should be 0, when no push", () => {
      const as = new ArrayStack(10);
      as.pop();
      assert.equal(as.count, 0);
    });

    it("count should be 0, when no push", () => {
      const as = new ArrayStack(10);
      as.pop();
      as.pop();
      assert.equal(as.count, 0);
    });
  });
});
