const express = require("express");
const app = express();
const router = require("./routes/courses");
const home = require("./routes/home");
const morgan = require("morgan");
const config = require("config");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const logging = require("./middleware/logging");
const auth = require("./middleware/auth");

// Built-in Middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Custom Middleware
app.use(logging);
app.use(auth);

// Configuration
console.log(`Application Name: ${config.get("name")}`);
console.log(`Mail Server: ${config.get("mail.host")}`);
// console.log(`Mail Password: ${config.get("mail.password")}`);

// Environment variable
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get("env")}`);
if (app.get("env") == "development") {
  app.use(morgan("tiny"));
  startupDebugger(`Morgan enabled`);
}

// DB Connection
dbDebugger("Database connection ok");

// pug
app.set("view engine", "pug");
app.set("views", "./template");

app.use("/api/courses", router);
app.use("/", home);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
