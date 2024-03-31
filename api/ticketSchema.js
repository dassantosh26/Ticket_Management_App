const mongoose = require("mongoose");
const tableStructure = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String },
  createdBy: { type: String, required: true },
  status: { type: String, required: true },
  createdDate: { type: String, required: true },
  assignTo: { type: String },
});
module.exports = mongoose.model("UserTicket", tableStructure);
