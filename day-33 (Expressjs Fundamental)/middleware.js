const express = require("express");
const app = express();

// Middleware
// Application Level Middleware
app.use((req, res, next) => {
  console.log(`Application level middleware`);
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

// Route Level Middleware
app.get("/about", (req, res, next) => {
  console.log(`About us`);
  next();
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.listen(3030, () => console.log(`Listening on port 3030`));
