const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token =
    (req &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[1]) ||
    "";

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = verified.user;
    next();
  } catch (error) {
    throw new Error("Authentication failed");
    next();
  }
};
module.exports = { authentication };
