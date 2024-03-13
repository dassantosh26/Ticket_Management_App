const express = require("express"); //Calling Express Framework
const app = express(); //Ceating object of express
const cors = require("cors"); //Calling cors origin to allow data communication between 2 servers
app.use(cors()); //Creating object of cors library
app.use(express.json()); //Injecting .json to send and receive data in json between 2 servers

//For Node.js to database connection

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ticket");
const db = mongoose.connection;
db.on("error", (error) => console("Error is in Databsae Connection"));
db.on("open", () => console.log("Database is connected.."));

//Login
const login = require("./loginApi");
app.use("/auth", login);

//http://localhost:1111/auth

app.listen(1111, function () {
  console.log("The Server Is Live...");
});

