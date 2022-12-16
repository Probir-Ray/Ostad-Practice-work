const express = require("express");
const { EncodeToken, DecodeToken } = require("../controllers/JWTPractice");
const {
  InsertStudent,
  ReadStudents,
  UpdateStudents,
  DeleteStudnt,
} = require("../controllers/StudentsController");
const { TokenIssue } = require("../controllers/TokenIssueController");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const router = express.Router();

// Apply JWT Auth

router.get("/TokenIssue", TokenIssue);
router.post("/students", TokenVerifyMiddleware, InsertStudent);
router.get("/students", TokenVerifyMiddleware, ReadStudents);
router.put("/students/:id", TokenVerifyMiddleware, UpdateStudents);
router.delete("/students/:id", TokenVerifyMiddleware, DeleteStudnt);

// Practice JWT Encode Decode
router.get("/EncodeToken", EncodeToken);
router.get("/DecodeToken", DecodeToken);

module.exports = router;
