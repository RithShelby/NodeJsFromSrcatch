const http = require("http");

const PORT = process.env.PORT || 3008;

const server = http.createServer((req, res) => {
 if (req.url === "/") {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js is working!");
 } else {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
 }
});

server.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}/`);
});
