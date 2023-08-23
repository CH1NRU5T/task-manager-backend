const User = require("../models/user");

async function createTask(req, res) {
  try {
    let { username, title, description } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    user.tasks.push({ title, description });
    await user.save();
    res.status(200).json({ message: "Task added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = createTask;
