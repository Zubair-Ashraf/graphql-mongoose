const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorId: String,
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
