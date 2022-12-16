const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url== '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>About Us page</h2><p>Lorem ipsum dolr amet sit.</p>')
        res.end()
    }
})


server.listen(8000, () => {
    console.log('Listening on port 8000');
});