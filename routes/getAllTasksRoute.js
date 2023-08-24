const express = require("express");
const getAllTasks = require("../controllers/getAllTasksController");
const router = express.Router();
router.get(`/getAllTasks/:username`, (req, res) => {
  getAllTasks(req, res);
});

module.exports = router;
