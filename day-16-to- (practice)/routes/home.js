const express = require("express");
const home = express.Router();

home.get("/", (req, res) => {
  res.render("index", { title: ":::WELCOME:::", message: "Welcome to the BD" });
});

module.exports = home;
