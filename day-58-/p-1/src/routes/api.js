const express = require("express");
const { Hello, greeting } = require("../controllers/HelloController");
const { InsertStudent } = require("../controllers/StudentsController");
const router = express.Router();

router.get("/hello-get", Hello);
router.post("/hello-greeting", greeting);
router.post("/insert-students", InsertStudent);

module.exports = router;
