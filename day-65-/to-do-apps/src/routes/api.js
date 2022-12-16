const express = require("express");
const {
  CreateProfile,
  UserLogin,
  SelectProfile,
  UpdateProfile,
} = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const router = express.Router();

router.post("/CreateProfile", CreateProfile);
router.post("/UserLogin", UserLogin);
router.get("/SelectProfile", AuthVerifyMiddleware, SelectProfile);
router.post("/UpdateProfile", AuthVerifyMiddleware, UpdateProfile);

module.exports = router;
