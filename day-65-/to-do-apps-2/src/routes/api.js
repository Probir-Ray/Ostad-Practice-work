const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const TodoController = require("../controllers/TodoController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

const router = express.Router();
router.post("/CreateProfile", ProfileController.CreateProfile);
router.post("/LoginProfile", ProfileController.LoginProfile);
router.get(
  "/SelectProfile",
  AuthVerifyMiddleware,
  ProfileController.SelectProfile
);

router.post(
  "/UpdateProfile",
  AuthVerifyMiddleware,
  ProfileController.UpdateProfile
);

router.post("/CreateTodo", AuthVerifyMiddleware, TodoController.CreateTodo);
router.get("/SelectTodo", AuthVerifyMiddleware, TodoController.SelectTodo);
router.get("/UpdateTodo", AuthVerifyMiddleware, TodoController.UpdateTodo);

module.exports = router;
