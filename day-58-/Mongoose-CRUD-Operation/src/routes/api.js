const express = require("express");
const { helloGet, greeting } = require("../controllers/HelloController");
const {
  InsertStudent,
  ReadStudent,
  UpdateStudent,
  DeleteStudent,
} = require("../controllers/StudentController");
const router = express.Router();

router.get("/get-msg", helloGet);
router.post("/greeting-msg", greeting);
router.post("/insert-student", InsertStudent);
router.get("/ReadStudent", ReadStudent);
router.post("/UpdateStudent/:id", UpdateStudent);
router.get("/DeleteStudent/:id", DeleteStudent);

module.exports = router;
