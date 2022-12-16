const express = require("express");
const app = express();
const router = require("./src/routes/api");

// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Database
const mongoose = require("mongoose");

// Security Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Express Body parse implementation
app.use(express.json());

// Request Rate Limit
const limiter = rateLimit({
  windowMs: 15 * 1000 * 60,
  max: 500,
  message: "To much request",
});

app.use(limiter);

// MongoDB Database connection
const URI = `mongodb://127.0.0.1:27017/Todo`;
const OPTION = { user: "", pass: "", autoIndex: true };
mongoose.connect(URI, OPTION, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

// Routing Implemention
app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).send({ status: "Not found", data: "Sorry, no route found" });
});

module.exports = app;
