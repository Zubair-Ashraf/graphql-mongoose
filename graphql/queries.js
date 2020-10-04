const { GraphQLString, GraphQLList } = require("graphql");
const { UserType, PostType, CommentType } = require("./types");
const { User, Post, Comment } = require("../models");

const users = {
  type: GraphQLList(UserType),
  resolve(parent, args) {
    return User.find();
  },
};

module.exports = { users };
