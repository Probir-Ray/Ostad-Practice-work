const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("homes.html", (err, data) => {
      if (err) return "Error found!";
      else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
