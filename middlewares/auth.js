const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers.authentication?.split(" ")[1] || "";

  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = isVerified;
    next();
  } catch (error) {
    throw new Error("Authentication failed");
    next();
  }
};
module.exports = { authentication };
