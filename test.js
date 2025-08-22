// test.js
const http = require("http");

const PORT = 3000; // you can change this number if you want

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Cynthia! 🚀 Your server is running.");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
