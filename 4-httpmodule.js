const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to Node.js HTTP Module</h1>");
    res.end();
  }
  if (req.url === "/about") {
    res.write(
      "<h1>About Us</h1><p>This is a simple HTTP server created using Node.js.</p>",
    );
    res.end();
  }
  res.end(
    "<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>",
  );
});

server.listen(5000); // Open http://localhost:5000 in your browser to see the output
