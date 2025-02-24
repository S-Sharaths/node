const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmediate"));

Promise.resolve(() => console.log("promise"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading cb");
});

setTimeout(() => console.log("timer expired"), 0);
process.nextTick(() => console.log("Process.nexttick"));

function printA() {
  console.log("a:" + a);
}
printA();
console.log("last line of program");
//output
// a:999
//Last line of program
//process.nexttick
//promise
//settimeout
//setimmediate
//file data
