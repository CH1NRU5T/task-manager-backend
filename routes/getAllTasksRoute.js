const express = require("express");
const getAllTasks = require("../controllers/getAllTasksController");
const router = express.Router();
router.get(`/getAllTasks/:username`, (req, res) => {
  //   res.status(200).json({ message: req.body });
  getAllTasks(req, res);
});

module.exports = router;
