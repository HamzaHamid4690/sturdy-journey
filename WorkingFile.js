var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // This is a blocking code, it will block the event loop until the file is read completely
    // const text = fs.readFileSync("./Bigfile.txt", "utf-8");
    // res.end(text);

    const stream = fs.createReadStream("./Bigfile.txt", "utf-8");
    stream.pipe(res);

    stream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
