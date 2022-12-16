const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h1>Home page</h1><hr>");
        res.end();
    } else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h2>About us page</h2>');
        res.end()
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404!</h1> <p>not found</p>');
        res.end()
    }
})

server.listen(8080, () => {
    console.log('Listening on port 8080');
})