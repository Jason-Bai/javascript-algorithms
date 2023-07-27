const assert = require("assert");

// Import the insert function
const getParent = require("../findParent");

// Test cases for the insert function
describe("Tree", () => {
  describe("getParent", function () {
    it("should return null", function () {
      const list = [];
      const childValue = "A";
      assert.strictEqual(getParent(list, childValue), null);
    });

    it("should return A-1", function () {
      const list = [
        {
          value: "A",
          children: [
            {
              value: "A-1",
              children: [
                {
                  value: "A-1-1",
                },
              ],
            },
            {
              value: "A-2",
            },
          ],
        },
        {
          value: "B",
          children: [
            {
              value: "B-1",
            },
            {
              value: "B-2",
            },
          ],
        },
      ];
      const childValue = "A-1-1";
      assert.deepStrictEqual(getParent(list, childValue), {
        value: "A-1",
        children: [
          {
            value: "A-1-1",
          },
        ],
      });
    });

    it("should return A", function () {
      const list = [
        {
          value: "A",
          children: [
            {
              value: "A-1",
              children: [
                {
                  value: "A-1-1",
                },
              ],
            },
            {
              value: "A-2",
            },
          ],
        },
        {
          value: "B",
          children: [
            {
              value: "B-1",
            },
            {
              value: "B-2",
            },
          ],
        },
      ];
      const childValue = "A-2";
      assert.deepStrictEqual(getParent(list, childValue), {
        value: "A",
        children: [
          {
            value: "A-1",
            children: [
              {
                value: "A-1-1",
              },
            ],
          },
          {
            value: "A-2",
          },
        ],
      });
    });

    it("should return null", function () {
      const list = [
        {
          value: "A",
          children: [
            {
              value: "A-1",
              children: [
                {
                  value: "A-1-1",
                },
              ],
            },
            {
              value: "A-2",
            },
          ],
        },
        {
          value: "B",
          children: [
            {
              value: "B-1",
            },
            {
              value: "B-2",
            },
          ],
        },
      ];
      const childValue = "C";
      assert.deepStrictEqual(getParent(list, childValue), null);
    });
  });
});
