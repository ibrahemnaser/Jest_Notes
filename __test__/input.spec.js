const inputFun = require("../input");

describe.skip("Validate Input Field", () => {
  describe("Check for empty and one values", () => {
    it("Check empty value", () => {
      expect(inputFun()).toBe("This is required field");
    });
    it("Check given value with length less than 8", () => {
      expect(inputFun("Hassan  ")).toBe("Enter 8 characters or more");
    });
    it("Check given value", () => {
      expect(inputFun("Ahmed Nasser")).toBe("Ahmed Nasser");
    });
    it("Check given value", () => {
      expect(inputFun("Adbelrahman")).toBe("Adbelrahman");
    });
  });
  describe("Check for values with spaces", () => {
    it("Check given value with one space between parts", () => {
      expect(inputFun("Hassan Allam")).toBe("Hassan Allam");
    });
    it("Check given value with more than one space between parts", () => {
      expect(inputFun("Hassan    Allam")).toBe("Hassan Allam");
    });
    it("Check given value with more than one space between parts and spaces at the edges", () => {
      expect(inputFun("    Hassan    Allam     Mohsen    ")).toBe(
        "Hassan Allam Mohsen"
      );
    });
    it("Check given value with spaces at the edges", () => {
      expect(inputFun("    HassanAllamMohsen    ")).toBe("HassanAllamMohsen");
    });
    it("Check given value with spaces at the edges", () => {
      expect(inputFun("    Hassan Allam Mohsen    ")).toBe(
        "Hassan Allam Mohsen"
      );
    });
  });
  describe("Check values with special characters", () => {
    it("Check given value starts with special character", () => {
      expect(inputFun("___     Ahmed       Mohsen  -   ---___     ")).toBe(
        "Ahmed Mohsen"
      );
    });
  });
});
