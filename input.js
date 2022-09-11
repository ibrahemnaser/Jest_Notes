function validateInput(name = "This is required field") {
  if (name.trim().length < 8) return "Enter 8 characters or more";
  return name
    .replace(/[^a-zA-Z ]/g, "") //replace any characters except [a-zA-Z ] into empty
    .trim()
    .replace(/\s+/g, " ");
}

module.exports = validateInput;
