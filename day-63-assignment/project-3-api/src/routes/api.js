const express = require("express");
const RegLoginController = require("../controllers/RegLoginController");
const router = express.Router();

router.post("/CreateProfile", RegLoginController.CreateProfile);
router.post("/LoginProfile", RegLoginController.LoginProfile);
router.post("/ChangePassword", RegLoginController.ChangePassword);

module.exports = router;
