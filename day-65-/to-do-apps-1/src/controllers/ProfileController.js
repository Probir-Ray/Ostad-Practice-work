const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");

exports.CreateProfile = (req, res) => {
  let reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.UserLogin = (req, res) => {
  const UserName = req.body.UserName;
  const Password = req.body.Password;

  ProfileModel.find(
    { UserName: UserName, Password: Password },
    "UserName EmailAddress MobileNumber",
    (err, data) => {
      if (err) {
        res.status(404).json({ status: "Error!", data: "not found" });
      } else {
        if (data.length > 0) {
          const Payloader = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0],
          };
          const token = jwt.sign(Payloader, "Secretkey123");

          res.status(200).json({ status: "Ok", token: token, data: data[0] });
        } else {
          res.status(401).json({ status: "Unauthorized!" });
        }
      }
    }
  );
};


exports.SelectProfile = (req, res) => {
  let UserName = req.headers.UserName;
  ProfileModel.find(
    { UserName: UserName },
    "UserName FirstName LastName EmailAddress",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};

exports.UpdateProfile = (req, res) => {
  let UserName = req.headers["UserName"];
  const reqBody = req.body;

  ProfileModel.updateOne(
    { UserName: UserName },
    { $set: reqBody },
    { upsert: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};
