const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Security Middleware Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "To many request from your IP, Please tray after 15 minutes",
});

app.use(limiter);

// Express:: Body parser
app.use(express.json());

// MongoDB Connection
const uri = `mongodb://127.0.0.1:27017/Atlash`;
const options = { user: "", pass: "" };

mongoose.connect(uri, options, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

app.use("/v1", router);

app.use("*", (req, res) => {
  res.status(404).send({ status: "Error!", data: "Not found" });
});

module.exports = app;
