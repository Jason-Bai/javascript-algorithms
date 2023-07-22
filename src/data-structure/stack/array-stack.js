class ArrayStack {
  constructor(n) {
    this.items = [];
    this.n = n;
    this.count = 0;
  }

  push(item) {
    if (this.count === this.n) return false;

    this.items[this.count] = item;

    ++this.count;

    return true;
  }

  pop() {
    if (this.count === 0) return null;

    const tmp = this.items[this.count];

    --this.count;

    return tmp;
  }
}

module.exports = ArrayStack;
