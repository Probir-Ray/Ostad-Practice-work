const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");

exports.CreateProfile = (req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const MobileNumber = req.body.MobileNumber;
  const EmailAddress = req.body.EmailAddress;
  const Joining = Date.now();
  const UserName = req.body.UserName;
  const Password = req.body.Password;

  const PostBody = {
    FirstName,
    LastName,
    MobileNumber,
    EmailAddress,
    Joining,
    UserName,
    Password,
  };

  ProfileModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.LoginProfile = (req, res) => {
  const UserName = req.body.UserName;
  const Password = req.body.Password;

  ProfileModel.find({ UserName: UserName, Password: Password }, (err, data) => {
    if (err) {
      res.status(404).json({ status: "Error!", data: "not found" });
    } else {
      if (data.length > 0) {
        const Payload = {
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
          data: data[0],
        };
        const token = jwt.sign(Payload, "Secretkey457");

        res.status(200).json({ status: "Ok", token, data: data[0] });
      } else {
        res.status(401).json({ status: "Unauthorized" });
      }
    }
  });
};

exports.SelectProfile = (req, res) => {
  const UserName = req.headers.UserName;

  ProfileModel.find(
    { UserName: UserName },
    "FirstName LastName MobileNumber EmailAddress",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Ok", data: data[0] });
      }
    }
  );
};

exports.UpdateProfile = (req, res) => {
  const UserName = req.headers.UserName;
  const reqBody = req.body;

  ProfileModel.updateOne(
    { UserName: UserName },
    { $set: reqBody },
    { upsert: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        if (data.modifiedCount > 0) {
          res.status(200).send("User information update successfully");
        } else {
          res.status(200).send("No change occurred");
        }
      }
    }
  );
};
