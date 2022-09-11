const sumFun = require("../sum");

describe.skip("Parent Describe block", () => {
  describe("First describe for empty and only one param", () => {
    it("Check empty params", () => {
      expect(sumFun()).toBe(0);
    });
    it("Check one param", () => {
      expect(sumFun(8)).toBe(8);
    });
  });
  describe("Second describe for more than one param", () => {
    it("Check two params", () => {
      expect(sumFun(50, 5)).toBe(55);
    });
    it("Check three params", () => {
      expect(sumFun(0, 2, 0)).toBe(2);
    });
    it("Check four params", () => {
      expect(sumFun(0, 2, 0, 88)).toBe(90);
    });
  });
});
