const mongoose = require("mongoose");
const User = require("../models/user");
async function deleteTask(req, res) {
  try {
    const { username, id } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User dosen't exist" });
    }
    let found = false;
    user.tasks.forEach((task, index) => {
      if (task._id == id) {
        user.tasks.splice(index, 1);
        found = true;
      }
    });
    if (found) {
      await user.save();
      return res.status(200).json({ message: "Task deleted successfully" });
    } else {
      return res.status(500).json({ error: "Task not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = deleteTask;
