const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // Read File :: Asynchronous
    /*fs.readFile("home.html", (err, data) => {
      if (err) return "Read Failed";
      else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        // res.end();
      }
    });
    

    // Read File :: Synchronous
    const readFile = fs.readFileSync("about.html", "utf-8");
    if (readFile) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(readFile);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Not Found");
      res.end();
    }
    

    // Write File :: Asynchronous
    fs.writeFile(
      "newOne.txt",
      "This is new one text documents",
      (err, data) => {
        if (err) {
          res.end("Not write ");
        } else {
          res.end("Write successfully", data);
        }
      }
    );
    

    // Write File :: Synchronous
    const txt = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Two</title>
    </head>
    <body>
        <h1>New File</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </body>
    </html>
    `;
    const err = fs.writeFileSync("newTwo.html", txt);
    if (err) res.end("Not write");
    else res.end("Write");
    

    // Rename File :: Asynchronous
    fs.rename("old.txt", "new.txt", (err) => {
      if (err) res.end("Name not change");
      else res.end("Name change");
    });
    

    // Rename File :: Synchronous
    const err = fs.renameSync("NEw.txt", "new.txt");
    if (err) res.end("Error");
    else res.end("Working");

    
    // Delete File :: Asynchronous
    fs.unlink("new.txt", (err) => {
        if (err) res.end("Not delete");
        else res.end("Deleted Successfully");
    });
    

    // Delete File :: Asynchronous
    const error = fs.unlinkSync("newOne.txt");
    if (error) res.end("Delete Field");
    else res.end("Deleted successfully");
    

    // Exists :: Synchronous
    const result = fs.existsSync("articles.txt");
    if (result) res.end("Ok");
    else res.end("Not ok");
    
    */
    // Exists :: Synchronous
    fs.exists("newTwos.html", (result) => {
      if (result) res.end("Found successfuly");
      else res.end("Not found");
    });
  }
});

server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
