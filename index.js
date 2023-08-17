const express = require("express");
const { json } = require("express");
const createUserRoute = require("./routes/createUserRoute");
const createTaskRoute = require("./routes/createTaskRoute");
const updateTaskRoute = require("./routes/updateTaskRoute");
const getAllTasksRoute = require("./routes/getAllTasksRoute");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(json());
app.use("/", createUserRoute);
app.use("/", createTaskRoute);
app.use("/", updateTaskRoute);
app.use("/", getAllTasksRoute);
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
app.listen(3000, () => console.log("listening on port 3000"));
