const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: String,
    authorId: String,
    postId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
