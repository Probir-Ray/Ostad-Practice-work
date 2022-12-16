const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(`
            <h1>Home Page</h1>
            <img src='https://st2.depositphotos.com/1018174/7405/i/950/depositphotos_74053027-stock-photo-muscular-man-showing-his-internal.jpg'>
        `);
        res.end()
    }
    else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(`
            <h1>About Us</h1>
            <img src='https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977559-stock-photo-hands-holding-word-about-us.jpg'>
        `);
        res.end('<p>An About Us Page is where we reveal our brand story, business values, mission, and experiences.</p>')
    }
    else if(req.url === '/blogs') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(`
            <h1>Blogs</h1>
            <p>alll post here</p>
            <hr/>
            <img src='https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg' width='800'/>
        `)
        res.end()
    }
    else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(`
            <h1>Contact Page</h1>
            <img src = 'https://st3.depositphotos.com/1385248/14794/i/450/depositphotos_147947683-stock-photo-hands-with-contact-us-words.jpg' alt='Contact'>
            <form>
                <br/>
                <input type='text' name='name' placeholder='Enter your Name'>
                <br/>
                <input type='email' name='email' placeholder='Enter your Email'>
                <br/>
                <input type='number' name='phone' placeholder='Enter your Phone Number'>
                <br/>
                <textarea></textarea>
                <br/>
                <input type='submit' name='btn' value='Send'>
            </form>
        `)
        res.end();
    } 
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write(`
            <h1>404</h1>
            <img src='https://st2.depositphotos.com/1001070/11051/v/450/depositphotos_110515442-stock-illustration-404-error-web-page.jpg'>
        `);
        res.end('<p>not found</p>');
    }
});


server.listen(3030);
console.log(`Listening on port 3030`);