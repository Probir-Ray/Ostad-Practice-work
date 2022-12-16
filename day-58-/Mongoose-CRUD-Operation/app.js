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

// MongoDB Database Connection
const uri = `mongodb+srv://<username>:<password>@cluster0.xrfjl.mongodb.net/school?retryWrites=true&w=majority`;
const options = { user: "myUser", pass: "x3MbGMza2KLeuWch" };
mongoose.connect(uri, options, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Database connection ok`);
  }
});

app.use("/v1/app", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});

module.exports = app;
