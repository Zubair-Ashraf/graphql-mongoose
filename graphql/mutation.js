const { GraphQLString } = require("graphql");
const { UserType, PostType, CommentType } = require("./types");
const { User, Post, Comment } = require("../models");
const { getToken } = require("../utils/jwt");

const register = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = new User(args);
    await user.save();
    const token = getToken(user);
    return JSON.stringify(token);
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, { email, password }) {
    const user = await User.findOne({ email });
    if (!user || user.password != password) throw new Error("Unable to login");
    return getToken(user);
  },
};

const post = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    console.log("verifiedUser", verifiedUser);
    const post = new Post({ ...args, authorId: verifiedUser._id });
    return await post.save();
  },
};

const comment = {
  type: CommentType,
  args: {
    comment: { type: GraphQLString },
    post: { type: GraphQLString },
  },
  async resolve(parent, args, { verifiedUser }) {
    const comment = new Comment({
      ...args,
      authorId: verifiedUser._id,
      postId: args.post,
    });
    return await comment.save();
  },
};

module.exports = { register, login, post, comment };
