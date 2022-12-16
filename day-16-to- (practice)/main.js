const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello BD");
});

// Response download
app.get("/api", (req, res) => {
  res.download(`./img/mailchimp.jpg`);
});

// Response redirect
app.get("/blog", (req, res) => {
  res.redirect("http://127.0.0.1:3030/news");
});

app.get("/news", (req, res) => {
  res.send("<h1>World news</h1>");
});

// Response Header
app.get("/header", (req, res) => {
  res.append("name", "HTC");
  res.append("country", "Taiwan");
  res.status(200).send("<h1>Ok</h1>");
});

// Response Set Cookies
app.get("/dk", (req, res) => {
  res.cookie("time", 2.34);
  res.cookie("city", "Dhaka");
  res.status(200).send("<h1>OH Ok</h1>");
});

app.get("/raj", (req, res) => {
  res.clearCookie("city");
  res.clearCookie("time");
  res.send("Ok ok ok");
});

app.listen(3030, () => console.log(`Listening on port 3030`));
