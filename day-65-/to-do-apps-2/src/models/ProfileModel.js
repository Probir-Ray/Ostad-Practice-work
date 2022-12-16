const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema(
  {
    UserName: { type: String, unique: true },
    Password: { type: String },
    EmailAddress: { type: String, unique: true },
    MobileNumber: {
      type: String,
      validate: {
        validator: (value) => {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
        },
      },
    },
  },
  { versionKey: false }
);

const ProfileModel = mongoose.model("profiles", ProfileSchema);
module.exports = ProfileModel;
