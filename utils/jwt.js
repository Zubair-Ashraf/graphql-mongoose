const jwt = require("jsonwebtoken");

const getToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7 days" });
};

module.exports = { getToken };
