var jwt = require("jsonwebtoken");

const ProfileModel = require("../models/ProfileModel");

exports.CreateProfile = (req, res) => {
  const reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) res.status(400).json({ status: "Fail", data: err });
    else res.status(201).json({ status: "Create successfully", data: data });
  });
};

exports.UserLogin = (req, res) => {
  const userName = req.body["UserName"];
  const password = req.body["password"];

  ProfileModel.find({ UserName: userName, password: password }, (err, data) => {
    if (err) {
      res.status(400).send({ status: "Fail", data: err });
    } else {
      if (data.length > 0) {
        // Create Auth Token
        let Payload = {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: data[0],
        };

        let token = jwt.sign(Payload, "SecretKey143");

        res
          .status(200)
          .send({ status: "Success", token: token, data: data[0] });
      } else {
        res.status(401).send({ status: "Unauthorized" });
      }
    }
  });
};

exports.SelectProfile = (req, res) => {
  let UserName = req.headers["userName"];
  ProfileModel.find(
    { UserName: UserName },
    "UserName City MobileNumber EmailAddress",
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
  let UserName = req.headers["userName"];
  let reqBody = req.body;
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
