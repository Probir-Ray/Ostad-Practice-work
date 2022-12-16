const express = require("express");
const {
  InsertEmployee,
  ReadEmployee,
  SingleEmployee,
  UpdateEmployee,
  DeleteEmployee,
} = require("../controllers/EmployeeController");

const router = express.Router();

router.post("/employee/create", InsertEmployee);
router.get("/employee", ReadEmployee);
router.get("/employee/:id", SingleEmployee);
router.put("/employee/:id", UpdateEmployee);
router.delete("/employee/:id", DeleteEmployee);

module.exports = router;
