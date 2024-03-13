const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: Number, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
});

module.exports = mongoose.model("MyAdmin", tableStructure);
