const assert = require("assert");
const ArrayQueue = require("../ArrayQueue");

describe("ArrayQueue", function () {
  describe("#enqueue", function () {
    it("should return false when capacity is reached", function () {
      const queue = new ArrayQueue(2);
      queue.enqueue(1);
      queue.enqueue(2);
      assert.equal(queue.enqueue(3), false);
    });
    it("should return true when item is added successfully", function () {
      const queue = new ArrayQueue(2);
      assert.equal(queue.enqueue(1), true);
    });
  });
  describe("#dequeue", function () {
    it("should return null when queue is empty", function () {
      const queue = new ArrayQueue(2);
      assert.equal(queue.dequeue(), null);
    });
    it("should return the first item when called", function () {
      const queue = new ArrayQueue(3);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      assert.equal(queue.dequeue(), 1);
    });
    it("should update head and tail correctly when called", function () {
      const queue = new ArrayQueue(3);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      assert.equal(queue.head, 1);
      assert.equal(queue.tail, 3);
    });
  });
});
