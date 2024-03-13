const express = require("express");
const router = express.Router();
module.exports = router;
const MyAdmin = require("./adminSchema");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const info = {
    email: email,
    password: password,
  };
  const userData = await MyAdmin.find(info);
  if (userData.length > 0) {
    const response = {
      status: "success",
      name: userData[0].fullName,
      id: userData[0]._id,
      type: userData[0].userType,
    };
    res.status(200).json(response);
  } else {
    const response = { status: "fail", name: "", id: "", type: "" };
    res.status(200).json(response);
  }
});
