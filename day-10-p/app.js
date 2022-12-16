const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const myUrl = "https://www.prothomalo.com/blogs?id=234&year=2010";
    const urlObject = url.parse(myUrl, true);
    console.log(urlObject);

    const hostname = urlObject.hostname;
    const pathName = urlObject.pathname;
    const search = urlObject.search;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(hostname);
    res.end()
})

server.listen(3000, () => {
    console.log(`Listening on port 3000`);
})