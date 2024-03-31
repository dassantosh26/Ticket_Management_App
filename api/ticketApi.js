const express = require("express");
const router = express.Router();
module.exports = router;
const UserTicket = require("./ticketSchema"); //calling ticket schema

router.get("/", async (req, res) => {
  const allTickets = await UserTicket.find();
  res.status(200).json(allTickets);
});

router.post("/", async (req, res) => {
  const title = req.body.ticketTitle;
  const details = req.body.details;
  const createdBy = req.body.userId;
  const ticketDate = new Date().toLocaleString();
  const newTicket = UserTicket({
    title: title,
    details: details,
    createdBy: createdBy,
    status: "OPEN",
    createdDate: ticketDate,
    assignTo: "",
  });
  const ticketInfo = await newTicket.save();
  res.status(200).json(ticketInfo);
});

router.post("/:assign", async (req, res) => {
  const assignTo = req.body.assignTo;
  const id = req.body.id;
  const info = await UserTicket.findById(id);
  info.assignTo = assignTo;
  await info.save();
  res.status(200).json({ message: "Ticket Is Assigned Successfully !" });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const info = await UserTicket.find({ createdBy: id });
  res.status(200).json(info);
});

router.put("/:id", async (req, res) => {
  const id = req.body.id;
  const newStatus = req.body.newStatus;
  const info = await UserTicket.findById(id);
  info.status = newStatus;
  await info.save();
  res.status(200).json({ message: "Ticket Updated" });
});
