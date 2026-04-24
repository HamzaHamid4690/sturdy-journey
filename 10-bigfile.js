const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("Bigfile.txt", `This is line number ${i}\n`, { flag: "a" });
}

// This code is synchronous and will block the event loop until all lines are written to the file. It uses the 'writeFileSync' method from the 'fs' module to append lines to 'Bigfile.txt'.
