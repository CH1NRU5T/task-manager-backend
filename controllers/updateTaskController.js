const mongoose = require("mongoose");
const Task = require("../models/task");
const User = require("../models/user");
async function updateTask(req, res) {
  try {
    const { username, id, title, description } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User dosen't exist" });
    }
    user.tasks.forEach((task) => {
      if (task._id == id) {
        task.title = title;
        task.description = description;
      }
    });
    await user.save();
    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = updateTask;
