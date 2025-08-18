const http = require("http");

const server = http.createServer((req, res) => {
 try {
  if (req.url === "/") {
   res.writeHead(200, { "Content-Type": "text/plain" });
   res.end("Welcome to Node.js!");
  } else {
   throw new Error("Page not found");
  }
 } catch (err) {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(err.message);
 }
});

server.listen(3000, () => console.log("Server running on port 3000"));
