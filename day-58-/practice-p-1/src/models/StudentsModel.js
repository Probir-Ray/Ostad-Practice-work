const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  Name: String,
  Roll: String,
  Class: String,
  Remarks: String,
});

const StudentsModel = mongoose.model("students", StudentSchema);
module.exports = StudentsModel;
