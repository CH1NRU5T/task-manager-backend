const express = require("express");
const deleteTask = require("../controllers/deleteTaskController");
const router = express.Router();
router.delete(`/deleteTask`, (req, res) => {
  deleteTask(req, res);
});

module.exports = router;
