const express = require("express");
let multer = require("multer");
const app = express();
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error! Please upload only jpg or png format image");
  }
}

app.post("/", upload.single('file'), (req, res) => {
    if (req.file) {
      res.send("File upload successfully");
    } else {
      res.send("File upload failed");
    }
});

app.listen(3030, () => console.log(`Listening on port 3030`));
