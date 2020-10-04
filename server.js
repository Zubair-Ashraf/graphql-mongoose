const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db");
const schema = require("./graphql/schema");
const { graphqlHTTP } = require("express-graphql");
const { authentication } = require("./middlewares/auth");
const app = express();
dotenv.config();
connectDB();

app.use(authentication);

app.get("", (req, res) => {
  res.send("Welcome to blogging site please go to /graphql path");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port: ${process.env.PORT}`);
});
