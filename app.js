require("./xyz.js");
// const calculateObject = require("./calculate/sum.js");

// const { calculateMultiple } = require("./calculate/multiple.js");
// // import { calculateSum, x } from "./sum.js";

const { calculateSum, calculateMultiple } = require("./calculate");
var a = 10;
var b = 20;
calculateSum(a, b);

// console.log(calculateObject.x);

calculateMultiple(a, b);
// console.log(calculateObject.x)
// console.log(name);
// console.log(a + b);
// console.log(global);
// console.log(this);
// console.log(globalThis);

console.log(globalThis === global);
