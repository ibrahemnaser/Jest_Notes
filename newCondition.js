function getTheName(name) {
  if (name.length < 8) {
    throw new Error("You must enter more than 8 chars");
  }
  if (name == "hellaaaaaaaaa") {
    throw new Error("Your name is not allowed");
  }
  return name;
}

module.exports = getTheName;
