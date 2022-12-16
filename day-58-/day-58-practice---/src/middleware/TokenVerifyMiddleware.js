const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "passKey124", (err, decoded) => {
    if (err) res.status(401).json({ status: "Error", data: err });
    else next();
  });
};
