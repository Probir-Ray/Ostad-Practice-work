const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const err = fs.unlinkSync("sigma-rule.txt");
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("File Delete Failed");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File Delete Successfully");
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
