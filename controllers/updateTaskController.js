const Task = require("../models/task");
async function updateTask(req, res) {
  try {
    const { id, title, description } = req.body;
    let task = await Task.findById(id);
    if (!task) {
      return res.status(400).json({ message: "Task dosen't exist" });
    }
    task.title = title;
    task.description = description;

    await task.save();
    res.status(200).json({ message: "Task updated Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = updateTask;
