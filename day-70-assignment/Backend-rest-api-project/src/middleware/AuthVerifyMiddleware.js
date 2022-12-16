const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "Secretkey457", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "Unauthorized" });
    } else {
      let UserName = decoded.data.UserName;
      req.headers.UserName = UserName;
      next();
    }
  });
};
