const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./db");
const schema = require("./graphql/schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();
dotenv.config();
connectDB();

app.get("", (req, res) => {
  res.json({ ms: "hello" });
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
