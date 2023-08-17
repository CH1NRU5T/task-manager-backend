const express = require("express");
const updateTask = require("../controllers/updateTaskController");
const router = express.Router();
router.put(`/updateTask`, (req, res) => {
  //   res.status(200).json({ message: req.body });
  updateTask(req, res);
});

module.exports = router;
