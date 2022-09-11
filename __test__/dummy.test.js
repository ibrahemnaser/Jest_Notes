const data = require("../dummy");

// beforeAll(() => {
//   console.log("Hello Before Test");
// });
// beforeEach(() => {
//   console.log(56);
// });

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
