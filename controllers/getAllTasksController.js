const Task = require("../models/task");
const User = require("../models/user");
async function getAllTasks(req, res) {
  try {
    const { username } = req.params;
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const tasks = user.tasks;
    res.status(200).json({ message: tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = getAllTasks;
