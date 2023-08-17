const mongoose = require("mongoose");
const User = require("../models/user");
async function deleteTask(req, res) {
  try {
    const { username, id } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User dosen't exist" });
    }
    user.tasks.forEach((task, index) => {
      if (task._id == id) {
        user.tasks.splice(index, 1);
      }
    });
    await user.save();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = deleteTask;
