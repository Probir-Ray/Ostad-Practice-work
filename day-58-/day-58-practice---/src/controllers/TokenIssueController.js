const jwt = require("jsonwebtoken");

exports.TokenIssue = (req, res) => {
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Soumittro", city: "Dhaka", homeCity: "Chittagong" },
  };

  let Token = jwt.sign(Payload, "passKey124");
  res.send(Token);
};
