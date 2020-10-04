const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { users, posts, comments } = require("./queries");
const { register, login, post, comment } = require("./mutation");
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users, posts, comments },
});
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutataion",
  fields: { register, login, post, comment },
});
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
