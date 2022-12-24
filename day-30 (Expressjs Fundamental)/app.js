const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/", (req, res) => {
  res.status(200).send("Ok");
});

app.get("/profile", (req, res) => {
  res.json([
    { name: "Samsung", country: "South Korea" },
    { name: "Nexus", country: "USA" },
    { name: "HTC", country: "Taiwan" },
  ]);
});

app.listen(3030, () => console.log(`Listening on port 3030`));
