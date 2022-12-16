const router = require("./src/routes/api");

const express = require("express");
const app = express();

// Security Middleware Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

// Request Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});

module.exports = app;
