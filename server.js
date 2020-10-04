const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("", (req, res) => {
  res.json({ ms: "hello" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port: ${process.env.PORT}`);
});
