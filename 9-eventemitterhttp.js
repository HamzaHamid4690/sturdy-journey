const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Hello World from Node.js");
});
server.listen(3000, () => console.log("Server is running on port 3000"));
