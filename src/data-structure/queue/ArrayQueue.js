class ArrayQueue {
  constructor(capacity) {
    this.items = [];
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    if (this.tail === this.capacity) return false;
    this.items[this.tail] = item;
    this.tail++;
    return true;
  }

  dequeue() {
    if (this.tail === this.head) return null;

    const ret = this.items[this.head];

    this.head++;

    return ret;
  }
}

module.exports = ArrayQueue;
