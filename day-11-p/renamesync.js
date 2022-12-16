const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const err = fs.renameSync("signasss.txt", "signa.txt");
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Rename Failed");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Rename Ok");
      res.end();
    }
  }
});

server.listen(3000);
console.log(`Listening on port 3000`);
