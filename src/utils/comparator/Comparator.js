class Comparator {
  /**
   * Constructor
   * @param {*} compareFunction - It may be custom compare function that, let's
   * say may compare custom objects together.
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It just assumes that 'a' and 'b' are strings or numbers.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  static defaultCompareFunction(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable 'a' is less than 'b'.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if variable 'a' is greater than 'b'.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable 'a' is less than or equal to 'b'.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * Checks if variable 'a' is greater than or equal to 'b'.
   * @param {*} a
   * @param {*} b
   * @returns
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const compareOriginal = this.compare;

    this.compare = (a, b) => compareOriginal(b, a);
  }
}

module.exports = Comparator;
