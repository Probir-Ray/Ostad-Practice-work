const express = require("express");
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
const router = require("./src/routes/api");

// Security Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Request Rate Limit implementation
const limiter = rateLimit({
  windowMs: 20 * 1000 * 60,
  max: 200,
  message: "Your request limit over, please try after 10 minutes",
});

app.use(limiter);

// Express body parser implementation
app.use(express.json());

// MongoDB Database Connection
const URI = `mongodb://127.0.0.1:27017/RestAPI`;
const OPTION = { user: "", pass: "", autoIndex: true };
mongoose.connect(URI, OPTION, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

// Routing Implementation
app.use("/api/v2", router);

// Undefine Routing Implementation
app.use("*", (req, res) => {
  res.status(404).send("not found");
});

module.exports = app;
