const express = require("express");
const router = require("./src/routes/api");
const app = express();

app.use("/", router);
module.exports = app;
