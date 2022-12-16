const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Roll: {
      type: Number,
      required: true,
      unique: true,
      min: [5, "Minimum 5 number and max number 60, But got {VALUE}"],
      max: [60, "Minimum 5 number and max number 60, But got {VALUE}"],
    },
    Mobile: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
          //   if (value.length === 11) {
          //     return true;
          //   } else {
          //     return false;
          //   }
        },
        message: "Invalid Mobile Number",
      },
    },
    Class: { type: String, required: true },
  },
  { versionKey: false }
);

const StudentsModel = mongoose.model("students", StudentSchema);
module.exports = StudentsModel;
