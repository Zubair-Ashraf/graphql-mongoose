const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    displayName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
