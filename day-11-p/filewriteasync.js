const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const p = "Lorem ipsum dolr amet sit....";
    fs.writeFile("new.txt", p, (err) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404</h1>");
        res.end("file not fund");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("data save successfully");
        res.end();
      }
    });
  }
});

server.listen(3030);
console.log(`Listening on port 3030`);
