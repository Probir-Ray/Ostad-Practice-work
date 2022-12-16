const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "SecretKey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "Unauthorized" });
    } else {
      const UserName = decoded.data.UserName;
      req.headers.UserName = UserName;
      next();
    }
  });
};
