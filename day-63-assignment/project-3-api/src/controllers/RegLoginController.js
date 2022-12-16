const RegLoginModel = require("../models/RegLoginModel");

exports.CreateProfile = (req, res) => {
  let reqBody = req.body;
  RegLoginModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Ok", data: data });
    }
  });
};

exports.LoginProfile = (req, res) => {
  const UserName = req.body.UserName;
  const Password = req.body.Password;

  RegLoginModel.find(
    { UserName: UserName, Password: Password },
    "FirstName LastName EmailAddress UserName",
    (err, data) => {
      if (err) {
        res.status(404).json({ status: "Fail", data: "not found" });
      } else {
        if (data.length > 0) {
          res
            .status(200)
            .json({ status: "Ok", data: "You are successfully login" });
        } else {
          res.status(401).json({ status: "Unauthorized" });
        }
      }
    }
  );
};

exports.ChangePassword = (req, res) => {
  const EmailAddress = req.body.EmailAddress;
  const OldPassword = req.body.OldPassword;
  const NewPassword = req.body.NewPassword;

  RegLoginModel.updateOne(
    {
      EmailAddress: EmailAddress,
      Password: OldPassword,
    },
    { $set: { Password: NewPassword } },
    { upsert: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        if (data.modifiedCount > 0) {
          if (data.modifiedCount > 0) {
            res.status(200).send("Password change successfully");
          }
        } else {
          res.status(401).json({ status: "Unauthorized" });
        }
      }
    }
  );
};
