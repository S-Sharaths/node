const fs = require("fs");

setImmediate(() => console.log("setimmediate"));
setTimeout(() => console.log("settimeout"));
Promise.resolve("Promise").then(console.log("Promise"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file read");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nexttick"));
  console.log("process.nexttick");
});

console.log("last line of program");

// last line of program
// process.nexttick (if the next tick is inside next it will keep on executing till all the next tick in the quque is completed )
// inner nexttick
// Promise
// settimeout
// setimmediate
// file read
