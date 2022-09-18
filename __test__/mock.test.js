describe("test mock function", () => {
  const mocker = jest.fn(() => "hello");
  test("check mock function", () => {
    expect(mocker()).toBe("hello");
    expect(mocker("")).toBe("hello");
    expect(mocker).toHaveBeenCalled(); // check for more than zero (>=1)
    expect(mocker).toHaveBeenCalledTimes(2); // check for specific number of times
    expect(mocker).toHaveBeenCalledWith();
    expect(mocker).toHaveBeenLastCalledWith("");
  });
});
