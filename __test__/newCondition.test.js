const getName = require("../newCondition");

describe.skip("get the name test block", () => {
  test("check the function", () => {
    expect(getName("Hellaaahaa")).toBe("Hellaaahaa");
  });
  test("check the length", () => {
    expect(getName("ana")).toThrow("You must enter more than 8 chars");
  });
  test("check the hellaaaaaaaaa", () => {
    expect(getName("hellaaaaaaaaa")).toThrow("Your name is not allowed");
  });
});
