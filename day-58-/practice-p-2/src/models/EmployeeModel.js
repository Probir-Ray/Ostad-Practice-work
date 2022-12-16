const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    Name: { type: String, required: true, unique: true },
    ID: {
      type: Number,
      min: [3, "Minimum 3 and Maximum 50, But get {VALUE}"],
      max: [50, "Minimum 3 and Maximum 50, But get {VALUE}"],
      unique: true,
    },
    Mobile: {
      type: String,
      unique: true,
      validate: {
        validator: (value) => {
          if (value.length === 11) return true;
          else return false;
        },
        message: "Invalid mobile number",
      },
    },
  },
  { versionKey: false }
);

const EmployeeModel = mongoose.model("EmployeeInformation", EmployeeSchema);
module.exports = EmployeeModel;
