const express = require("express");
const app = express();

// Response Download
app.get("/", (req, res) => {
  res.download("./img/google.jpg");
});

// Response Redirect
app.get("/dk", (req, res) => {
  res.redirect(`http://127.0.0.1:3030/rang`);
});

app.get("/rang", (req, res) => {
  res.send("Rangpur City");
});

// Response Header
app.get("/header", (req, res) => {
  res.append("name", "Probir");
  res.append("city", "Rangpur");
  res.append("currentCity", "Dhaka");
  res.status(200).send("Ok");
});

// Response Set Cookies
app.get("/cookie", (req, res) => {
  res.cookie("username", "Krishna");
  res.cookie("password", "8&^&^sdhf");
  res.status(200).send("Cookie set successfully");
});

// Response Clear Cookies
app.get("/clearCookie", (req, res) => {
  // res.clearCookie("username");
  res.clearCookie("password");
  res.status(200).send("Cookie clear ok");
});

app.listen(3030, () => console.log(`Listening on port 3030`));
