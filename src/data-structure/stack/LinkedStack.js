class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addNext(value) {
    const next = new Node(value);
    this.next = next;
    return next;
  }
}

class LinkedStack {
  constructor(n) {
    this.head = new Node(null);
    this.n = n;
    this.count = 0;
  }

  push(value) {
    if (this.count === this.n) return false;

    const node = new Node(value);

    const next = this.head.next;

    node.next = next;

    this.head.next = node;

    this.count++;

    return true;
  }

  pop() {
    if (this.count === 0) return null;

    const value = this.head.next.value;

    this.head.next = this.head.next.next;

    this.count--;

    return value;
  }
}

module.exports = LinkedStack;
