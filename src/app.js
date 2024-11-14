const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hello i ma from server");
});

app.use("/hello", (req, res) => {
  res.send("yoooo");
});

app.listen(3000, () => {
  console.log("ruunning success");
});
