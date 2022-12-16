const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];
  
  jwt.verify(Token, "Secretkey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "Unauthorized" });
    } else {
      // Get UserName from Decoded token and add with Request Header
      const UserName = decoded["data"]["UserName"];
      req.headers.UserName = UserName;
      next();
    }
  });
};
