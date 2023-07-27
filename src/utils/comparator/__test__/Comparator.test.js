const assert = require("assert");

const Comparator = require("../Comparator");

describe("Comparator", () => {
  it("should compare with default comparator function", () => {
    const comparator = new Comparator();

    assert.equal(comparator.equal(0, 0), true);
    assert.equal(comparator.equal(0, 1), false);
    assert.equal(comparator.equal("a", "a"), true);

    assert.equal(comparator.lessThan(1, 2), true);
    assert.equal(comparator.lessThan(-1, 2), true);
    assert.equal(comparator.lessThan("a", "b"), true);
    assert.equal(comparator.lessThan("a", "ab"), true);
    assert.equal(comparator.lessThan(10, 2), false);

    assert.equal(comparator.lessThanOrEqual(10, 2), false);
    assert.equal(comparator.lessThanOrEqual(1, 1), true);
    assert.equal(comparator.lessThanOrEqual(0, 0), true);

    assert.equal(comparator.greaterThan(0, 0), false);
    assert.equal(comparator.greaterThan(10, 0), true);

    assert.equal(comparator.greaterThanOrEqual(10, 0), true);
    assert.equal(comparator.greaterThanOrEqual(10, 10), true);
    assert.equal(comparator.greaterThanOrEqual(0, 10), false);
  });

  it("should compare with custom comparator function", () => {
    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    assert.equal(comparator.equal("a", "b"), true);
    assert.equal(comparator.equal("a", ""), false);

    assert.equal(comparator.lessThan("b", "aa"), true);

    assert.equal(comparator.greaterThanOrEqual("a", "aa"), false);
    assert.equal(comparator.greaterThanOrEqual("aa", "a"), true);
    assert.equal(comparator.greaterThanOrEqual("a", "a"), true);

    comparator.reverse();

    assert.equal(comparator.equal("a", "b"), true);
    assert.equal(comparator.equal("a", ""), false);

    assert.equal(comparator.lessThan("b", "aa"), false);

    assert.equal(comparator.greaterThanOrEqual("a", "aa"), true);
    assert.equal(comparator.greaterThanOrEqual("aa", "a"), false);
    assert.equal(comparator.greaterThanOrEqual("a", "a"), true);
  });
});
