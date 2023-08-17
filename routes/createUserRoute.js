const express = require("express");
const createUser = require("../controllers/createUserController");
const router = express.Router();
router.post(`/createUser`, (req, res) => {
  //   res.status(200).json({ message: req.body });
  createUser(req, res);
});

module.exports = router;
