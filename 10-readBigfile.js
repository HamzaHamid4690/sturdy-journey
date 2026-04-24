const { createReadStream } = require("fs");

const stream = createReadStream("./Bigfile.txt");

stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

stream.on("error", (err) => {
  console.log("Error:", err);
});
