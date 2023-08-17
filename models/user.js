const mongoose = require("mongoose");
const Task = require("./task");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: {
    type: [Task],
  },
});
module.exports = mongoose.model("User", UserSchema);
