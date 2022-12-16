const express = require("express");
const { hello, evening } = require("../controllers/HelloController");
const router = express.Router();

router.get("/get-hello", hello);
router.post("/post-hello", evening);

module.exports = router;
