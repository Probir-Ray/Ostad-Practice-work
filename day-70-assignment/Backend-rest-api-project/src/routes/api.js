const express = require("express");
const ListController = require("../controllers/ListController");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const router = express.Router();

// Profile router
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

// List router
router.post("/CreateList", AuthVerifyMiddleware, ListController.CreateList);
router.post("/UpdateList", AuthVerifyMiddleware, ListController.UpdateList);
router.post(
  "/UpdateStatusList",
  AuthVerifyMiddleware,
  ListController.UpdateStatusList
);
router.post("/DeleteList", AuthVerifyMiddleware, ListController.DeleteList);
router.get("/ReadList", AuthVerifyMiddleware, ListController.ReadList);
router.get("/SingleList", AuthVerifyMiddleware, ListController.SingleList);
router.post("/SearchList", AuthVerifyMiddleware, ListController.SearchList);
router.post(
  "/FilterListByStatus",
  AuthVerifyMiddleware,
  ListController.FilterListByStatus
);
router.post(
  "/FilterListByDate",
  AuthVerifyMiddleware,
  ListController.FilterListByDate
);

module.exports = router;
