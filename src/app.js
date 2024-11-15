const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Shiraj");
// });
app.get("/user", (req, res) => {
  res.send({ name: "nammee", age: 20 });
});

app.post("/user", (req, res) => {
  console.log("save dta to db");
  res.send("Data suffullfy save");
});

app.use("/test", (req, res) => {
  res.send("hello i ma from server");
});

app.use("/hello", (req, res) => {
  res.send("yoooo");
});

app.listen(3000, () => {
  console.log("ruunning success");
});
