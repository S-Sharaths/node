require("../xyz.js");

var x = "hello world";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x,
  calculateSum,
};
