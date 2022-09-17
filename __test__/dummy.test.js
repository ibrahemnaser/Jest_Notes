const data = require("../dummy");

// beforeAll(() => {
//   console.log("Hello Before Test");
// });
// beforeEach(() => {
//   console.log(56);
// });
describe.skip("First test suite", () => {
  test("Check for the data lenght", () => {
    expect(data.length).toBe(5);
  });
  test("Check for the data lenght", () => {
    expect(data).toHaveLength(5);
  });
  test("Check for the first index type", () => {
    expect(typeof data[0]).toBe("number");
  });
  test("Check for the second index type", () => {
    expect(typeof data[1]).toBe("boolean");
  });
  test("Check for a specific number in arr", () => {
    expect(data).toContain(false);
  });
  test("Check for a specific number not to be in arr", () => {
    expect(data).not.toContain(true);
  });
});

describe("Test suite two of matchers", () => {
  test("Check undefined", () => {
    let a;
    expect(a).toBeUndefined();
  });
  test("Check elzero RegExp", () => {
    let name = "Elzero";
    expect(name).toMatch(/Elzero/);
  });
  test("Check obj property with key only", () => {
    let obj = {
      name: "hello",
      age: 55,
    };
    expect(obj).toHaveProperty("age");
  });
  test("Check obj property with key and value", () => {
    let obj = {
      name: "hello",
      age: 55,
    };
    expect(obj).toHaveProperty("age", 55);
  });
});
