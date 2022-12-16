const mongoose = require("mongoose");

const RegLoginSchema = mongoose.Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    EmailAddress: { type: String, unique: true },
    MobileNumber: {
      type: String,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
        },
      },
    },
    UserName: { type: String, unique: true },
    Password: { type: String },
  },
  { versionKey: false }
);

const RegLoginModel = mongoose.model("profiles", RegLoginSchema);
module.exports = RegLoginModel;
