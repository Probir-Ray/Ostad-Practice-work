const express = require("express");
const { Hello, Greeting } = require("../controllers/HelloController");
const { InsertStudent } = require("../controllers/StudentController");
const router = express.Router();

router.get("/", Hello);
router.post("/", Greeting);
router.post("/create-student", InsertStudent);

module.exports = router;
