
const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const TodoListController = require("../controllers/TodoListController");
const router = express.Router();

router.post("/CreateProfile", ProfileController.CreateProfile);
router.post("/UserLogin", ProfileController.UserLogin);
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

// TodoList Route
router.post("/CreateTodo", AuthVerifyMiddleware, TodoListController.CreateTodo);
router.get("/SelectTodo", AuthVerifyMiddleware, TodoListController.SelectTodo);
router.post("/UpdateTodo", AuthVerifyMiddleware, TodoListController.UpdateTodo);
router.put(
  "/UpdateStatusTodo",
  AuthVerifyMiddleware,
  TodoListController.UpdateStatusTodo
);

router.delete(
  "/DeleteTodo",
  AuthVerifyMiddleware,
  TodoListController.DeleteTodo
);
router.get(
  "/SelectTodoByStatus",
  AuthVerifyMiddleware,
  TodoListController.SelectTodoByStatus
);

router.get(
  "/SelectTodoByDate",
  AuthVerifyMiddleware,
  TodoListController.SelectTodoByDate
);

module.exports = router;
