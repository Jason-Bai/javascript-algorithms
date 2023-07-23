const assert = require("assert");
const LinkedListNode = require("../LinkedListNode");

describe("LinkedListNode", () => {
  it("should create list node with value", () => {
    const node = new LinkedListNode(1);

    assert.equal(node.value, 1);
    assert.equal(node.next, null);
  });

  it("should create list node with object as a value", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode(nodeValue);

    assert.equal(node.value.value, 1);
    assert.equal(node.value.key, "test");
    assert.equal(node.next, null);
  });

  it("should link nodes together", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    assert.notEqual(node1.next, null);
    assert.equal(node2.next, null);
    assert.equal(node1.value, 1);
    assert.equal(node2.value, 2);
  });

  it("should convert node to string", () => {
    const node = new LinkedListNode(1);

    assert.equal(node.value, 1);

    node.value = "string value";

    assert.equal(node.value, "string value");
  });

  it("should convert node to string with custom stringifier", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode(nodeValue);

    const toStringCallback = (value) =>
      `value: ${value.value}, key: ${value.key}`;

    assert.equal(node.toString(toStringCallback), "value: 1, key: test");
  });
});
