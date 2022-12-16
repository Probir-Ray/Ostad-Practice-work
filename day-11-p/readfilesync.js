

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const readFile = fs.readFileSync("about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(readFile);
    res.end("The End");
  }
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
