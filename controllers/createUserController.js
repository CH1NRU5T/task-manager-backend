const User = require("../models/user");
async function createUser(req, res) {
  try {
    const { username } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({ username });
    await user.save();
    res.status(200).json({ message: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
}
module.exports = createUser;
