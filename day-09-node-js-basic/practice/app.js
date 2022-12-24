const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <h2>Home Page</h2>
        <p>Welcome to the neverland</p>
    `);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <h2>About Us</h2>
        <p>lorem ipsum dolr amet sit</p>
    `);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
        <h2>404</h2>
        <p>not found</p>
    `);
    res.end();
  }
});

server.listen(3030);
console.log(`Listening on port 3030`);
