// Synchronous File System Module (fs) in Node.js
const fs = require("fs");

const read1 = fs.readFileSync("./3-readfile.txt", "utf-8"); // Read the file
console.log(read1);

const write = fs.writeFileSync("./3-writefile.txt", "Hello World"); // Write to the file (Overwrite if exists)
const read2 = fs.readFileSync("./3-writefile.txt", "utf-8");
console.log(read2);

fs.appendFileSync("./3-writefile.txt", " Hello Again"); // Append to the file (Create if it doesn't exist)
const read3 = fs.readFileSync("./3-writefile.txt", "utf-8");
console.log(read3);
