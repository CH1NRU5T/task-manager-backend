const express = require("express");
const createTask = require("../controllers/createTaskController");
const router = express.Router();
router.post(`/createTask`, (req, res) => {
  //   res.status(200).json({ message: req.body });
  createTask(req, res);
});

module.exports = router;
