var http=require('http');  // ES5

var server=http.createServer((req,res)=> {
    if(req.url==="/"){
        res.end('This is home ')
    }
    else if(req.url==="/a"){

        res.end('This is a ')
    }
    else if(req.url==="/b"){
        res.end('This is b ')

    }
    else if(req.url==="/c"){

        res.end('This is b ')
    }
})


server.listen(5005);
console.log('Success')