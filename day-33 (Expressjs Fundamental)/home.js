const express = require("express");
const app = express();

// Body parser
/*
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));
app.post("/", (req, res) => {
  const data = req.body;
  res.send(JSON.stringify(data));
});
*/

app.listen(3030, () => console.log(`Listening on port 3030`));
