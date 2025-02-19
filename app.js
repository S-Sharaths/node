require("./xyz.js");

const calculateSum = require("./sum.js");

var name = "hi node";

var a = 10;
var b = 20;

calculateSum(a, b);

// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this);
// console.log(globalThis);

console.log(globalThis === global);
