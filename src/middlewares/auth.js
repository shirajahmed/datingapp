const adminAuth = (req, res, next) => {
  // middlewaree check auth
  console.log("miidleware");
  const token = "xyz";
  const isValidate = token === "xyz";

  if (!isValidate) {
    res.status(401).send("NO authozie");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  // middlewaree check auth
  console.log("miidleware");
  const token = "xyz";
  const isValidate = token === "xyz";

  if (!isValidate) {
    res.status(401).send("NO authozie");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
