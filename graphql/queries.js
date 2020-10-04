const { GraphQLString, GraphQLList } = require("graphql");
const { UserType, PostType, CommentType } = require("./types");
const { User, Post, Comment } = require("../models");

const users = {
  type: GraphQLList(UserType),
  resolve(parent, args) {
    return User.find();
  },
};

const posts = {
  type: GraphQLList(PostType),
  resolve(parent, args) {
    return Post.find();
  },
};

const comments = {
  type: GraphQLList(CommentType),
  resolve(parent, args) {
    return Comment.find();
  },
};

module.exports = { users, posts, comments };
