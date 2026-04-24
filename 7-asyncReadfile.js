const { readFile } = require("fs");

readFile("./3-readfile.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
console.log("Reading file..."); // This will be printed before the file content because readFile is asynchronous.
