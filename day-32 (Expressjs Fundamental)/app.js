const express = require("express");
const app = express();

// Simple Get Request
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get Request With URL Query
app.get("/product", (req, res) => {
  const productName = req.query.name;
  const price = req.query.price;
  res.send(`${productName} => ${price}`);
});

// Working With Get Request Header
app.get("/header", (req, res) => {
  const name = req.header("name");
  const city = req.header("city");
  res.send(`${name} => ${city}`);
});

app.listen(3030, () => console.log(`Listening on port 3030`));
