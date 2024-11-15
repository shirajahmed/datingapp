const express = require("express");
const { userAuth, adminAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("user login");
});

app.get("/user", userAuth, (req, res) => {
  res.send("user data");
});

app.get("/admin/allData", (req, res) => {
  res.send("al data");
});

app.get("/admin/deleteData", (req, res) => {
  res.send("Deleted data");
});

// app.use("/", (req, res) => {
//   res.send("Shiraj");
// });
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("first");
//     next();
//     console.log("after next");
//     res.send("first");
//     console.log("end");
//   },
//   (req, res) => {
//     console.log("second");
//     res.send("second");
//   }
// );

// app.post("/user", (req, res) => {
//   console.log("save dta to db");
//   res.send("Data suffullfy save");
// });

// app.use("/test", (req, res) => {
//   res.send("hello i ma from server");
// });

// app.use("/hello", (req, res) => {
//   res.send("yoooo");
// });

app.listen(3000, () => {
  console.log("ruunning success");
});
