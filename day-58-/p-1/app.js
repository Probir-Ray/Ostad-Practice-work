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

app.use(express.json());

// Request Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "To many request from your IP, Please tray after 15 minutes",
});

app.use(limiter);

// MongoDB Database connection
const uri = `mongodb://127.0.0.1:27017/Schools`;
const options = { user: "", pass: "" };
mongoose.connect(uri, options, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

app.use("/app/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found" });
});

module.exports = app;
