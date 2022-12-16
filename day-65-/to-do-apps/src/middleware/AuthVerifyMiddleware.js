var jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "SecretKey143", (err, decoded) => {
    if (err) {
      res.status(401).send({ status: "Unauthorized" });
    } else {
      // Get userName from Decoded Token & add with Req Header
      const userName = decoded["data"]["UserName"];
      req.headers["userName"] = userName;
      next();
    }
  });
};
