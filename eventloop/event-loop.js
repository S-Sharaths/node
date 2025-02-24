const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a=" + a);
}
printA();

console.log("Last line of program");

// a=100
// Last line of program
// Timer expired
// setImmediate (this is came early before file read because file read was still going on)
// file reading CB (once file reading is completed )