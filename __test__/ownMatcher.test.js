describe.skip("Ckeck my own matchers", () => {
  test.skip("check if recieved is greater than by two", () => {
    expect(10).toBeGreaterByTwo(8);
  });
  test("check if recieved is in between", () => {
    expect(5).toBeInRange(1, 6);
  });
});

// create own Matchers

expect.extend({
  toBeGreaterByTwo(recieved, target) {
    return recieved - 2 === target
      ? {
          message: () => `The recieved ${recieved} is greater by two ${target}`,
          pass: true,
        }
      : {
          message: () =>
            `The recieved ${recieved} is not greater by two ${target}`,
          pass: false,
        };
  },
  toBeInRange(recieved, start, end) {
    return recieved > start && recieved < end
      ? {
          message: () =>
            `Expected ${recieved} ro be between ${start} and ${end}`,
          pass: true,
        }
      : {
          message: () =>
            new Error(`Expected ${recieved} ro be between ${start} and ${end}`),
          pass: false,
        };
  },
});

// expect.anything()

describe.skip("Check for anything", () => {
  test.skip("check for undefined", () => {
    expect(undefined).toEqual(expect.anything());
  });
  test.skip("check for null", () => {
    expect(null).toEqual(expect.anything());
  });
  test("check for anything", () => {
    expect(false).toEqual(expect.anything());
  });
});

// expect.any(Constructor)

describe.skip("Check for any", () => {
  test("check for Number constructor", () => {
    expect(0).toEqual(expect.any(Number));
  });
  test("check for String constructor", () => {
    expect("").toEqual(expect.any(String));
  });
  test("check for Object constructor", () => {
    expect({}).toEqual(expect.any(Object));
  });
  test("check for Array constructor", () => {
    expect([]).toEqual(expect.any(Array));
  });
});

// expect.arrayContaining(array)

describe.skip("Check for array containing", () => {
  test("check array containing", () => {
    expect([11, 5, 8]).toEqual(expect.arrayContaining([11]));
  });
});
