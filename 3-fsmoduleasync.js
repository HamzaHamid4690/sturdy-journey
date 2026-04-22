// Asynchronous File System Module (fs) in Node.js
const fs = require("fs");

fs.readFile("./3-readfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  }
  console.log(data);
});

fs.writeFile(
  "./3-writefile.txt",
  "Hello World! This is the write file.",
  (err) => {
    if (err) {
      console.log("Error writing file:", err);
    }
    console.log("File written successfully");
  },
);
fs.readFile("./3-writefile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
  }
  console.log(data);
});
