const mongoose = require("mongoose");
const ProfileSchema = mongoose.Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    EmailAddress: { type: String },
    MobileNumber: {
      type: String,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
          //   if (value.length === 11) return true;
          //   else return false;
        },
        message: "Invalid mobile number",
      },
    },
    City: { type: String },
    UserName: { type: String, unique: true },
    password: { type: String },
  },
  { versionKey: false }
);

const ProfileModel = mongoose.model("profiles", ProfileSchema);
module.exports = ProfileModel;
