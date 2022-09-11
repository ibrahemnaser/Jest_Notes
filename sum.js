function sumNums(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sumNums;
