const express = require("express");
const { hello, hi } = require("../controllers/HelloController");
const router = express.Router();

router.get("/hello", hello);
router.post("/hi", hi);

module.exports = router;
