const express = require("express");
const { json } = require("express");
const createUserRoute = require("./routes/createUserRoute");
const createTaskRoute = require("./routes/createTaskRoute");
const updateTaskRoute = require("./routes/updateTaskRoute");
const getAllTasksRoute = require("./routes/getAllTasksRoute");
const deleteTaskRoute = require("./routes/deleteTaskRoute");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
app.use(json());
app.use("/", createUserRoute);
app.use("/", createTaskRoute);
app.use("/", updateTaskRoute);
app.use("/", getAllTasksRoute);
app.use("/", deleteTaskRoute);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.listen(3000, () => console.log("listening on port 3000"));
