require("./xyz.js");

const calculateObject = require("./sum.js");

var name = "hi node";

var a = 10;
var b = 20;
calculateObject.calculateSum(a, b);

console.log(calculateObject.x);
// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this);
// console.log(globalThis);

console.log(globalThis === global);
