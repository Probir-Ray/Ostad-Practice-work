
const mongoose = require("mongoose");
const ProfileSchema = mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    EmailAddress: { type: String },
    MobileNumber: {
      type: String,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
        },
      },
    },
    City: { type: String },
    UserName: { type: String, unique: true },
    Password: { type: String },
  },
  { versionKey: false }
);

const ProfileModel = mongoose.model("profiles", ProfileSchema);
module.exports = ProfileModel;
