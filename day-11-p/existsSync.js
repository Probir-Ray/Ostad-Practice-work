const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const result = fs.existsSync("new.txt");
    if (result) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File Exists");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("File Not Exists");
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
