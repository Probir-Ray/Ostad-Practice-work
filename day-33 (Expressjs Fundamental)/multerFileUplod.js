// Working With Multipart Form Data
const express = require("express");
const app = express();
const multer = require("multer");

// File upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("myFile");

app.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send("File upload failed");
    } else {
      res.send("File upload ok");
    }
  });
});

app.listen(3030, () => console.log(`Listening on port 3030`));
