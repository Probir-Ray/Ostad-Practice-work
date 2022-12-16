const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Roll: {
      type: Number,
      required: true,
      min: [1, "Minimum 1 & Maximum 10, But got {VALUE}"],
      max: [10, "Minimum 1 & Maximum 10, But got {VALUE}"],
    },
    Mobile: {
      type: String,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
          //   if (value.length === 11) {
          //     return true;
          //   } else {
          //     return false;
          //   }
        },
        message: "Invalid mobile number",
      },
    },
    Class: String,
    Remarks: String,
  },
  { versionKey: false }
);

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;
