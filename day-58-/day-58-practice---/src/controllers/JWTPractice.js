const jwt = require("jsonwebtoken");

exports.EncodeToken = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Soumittro", city: "Dhaka", homeCity: "Chittagong" },
  };

  let Token = jwt.sign(Payload, "passKey124");
  res.send(Token);
};

exports.DecodeToken = (req, res) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "passKey124", (err, decoded) => {
    if (err) res.status(401).json({ status: "Error", data: err });
    else res.status(200).json({ status: "Okay", data: decoded });
  });
};
