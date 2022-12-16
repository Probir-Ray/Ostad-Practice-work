const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const err = fs.writeFileSync("signa.txt", "::: Sigma Rule :::");
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404</h1>");
      res.end("not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File write successfully");
      res.end();
    }
  }
});

server.listen(3000);
console.log("Listening");
