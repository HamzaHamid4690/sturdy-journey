const { readFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);

const start = async () => {
  try {
    const read = await readFile("./3-readfile.txt", "utf-8");
    const read2 = await readFile("./3-writefile.txt", "utf-8");
    console.log(read, "\n", read2);
  } catch (error) {
    console.log(error);
  }
};

start();

// 2.Function to read a file and return a promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// 1. Using .then() and .catch() to handle the promise returned by getText function
// getText("./3-readfile.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
