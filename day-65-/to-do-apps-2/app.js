const express = require("express");
const router = require("./src/routes/api");
const app = express();

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
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cors());

// Request Rate Limit implementation
const limiter = rateLimit({
  windowMs: 15 * 1000 * 60,
  max: 300,
  message: "Your request limit over, please try after 30 minutes",
});
app.use(limiter);

// Express Body Parser Implementation
app.use(express.json());

// MongoDB Database Connection
const URI = `mongodb://127.0.0.1:27017/REST`;
const OPTION = { user: "", pass: "", autoIndex: true };
mongoose.connect(URI, OPTION, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

// Routing Implementation
app.use("/api/v4", router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});

module.exports = app;
