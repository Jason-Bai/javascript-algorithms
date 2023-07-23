const assert = require("assert");
const LinkedStack = require("../LinkedStack");

describe("LinkedStack", function () {
  describe("#push()", function () {
    it("count should be 1, when push 1 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      assert.equal(ls.count, 1);
    });

    it("count should be 2, when push 1, 2 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      assert.equal(ls.count, 2);
    });

    it("count should be 3, when push 1, 2, 3 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      assert.equal(ls.count, 3);
    });

    it("count should be 4, when push 1, 2, 3, 3 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      ls.push(3);
      assert.equal(ls.count, 4);
    });

    it("count should be 3, when push 1, 2, 3, 3 into stack", () => {
      const ls = new LinkedStack(3);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      ls.push(3);
      assert.equal(ls.count, 3);
    });
  });
  describe("#pop()", function () {
    it("count should be 1, when push 1, 2, 3 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      ls.pop();
      ls.pop();
      assert.equal(ls.count, 1);
    });

    it("count should be 0, when push 1, 2, 3 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      ls.pop();
      ls.pop();
      ls.pop();
      assert.equal(ls.count, 0);
    });

    it("count should be 0, when push 1, 2, 3 into stack", () => {
      const ls = new LinkedStack(10);
      ls.push(1);
      ls.push(2);
      ls.push(3);
      ls.pop();
      ls.pop();
      ls.pop();
      ls.pop();
      assert.equal(ls.count, 0);
    });

    it("count should be 0, when no push", () => {
      const ls = new LinkedStack(10);
      ls.pop();
      assert.equal(ls.count, 0);
    });

    it("count should be 0, when no push", () => {
      const ls = new LinkedStack(10);
      ls.pop();
      ls.pop();
      assert.equal(ls.count, 0);
    });
  });
});
