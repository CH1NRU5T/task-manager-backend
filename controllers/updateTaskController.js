const mongoose = require("mongoose");
const Task = require("../models/task");
const User = require("../models/user");
async function updateTask(req, res) {
  try {
    const { username, id, title, description } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User dosen't exist" });
    }
    let found = false;
    user.tasks.forEach(async (task) => {
      if (task._id == id) {
        task.title = title;
        task.description = description;
        found = true;
      }
    });
    if (found) {
      await user.save();
      return res.status(200).json({ message: "Task updated" });
    } else return res.status(500).json({ error: "Task not found" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
module.exports = updateTask;
