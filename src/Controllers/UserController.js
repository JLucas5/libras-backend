const User = require("../Models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;
    userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(401).json({ error: "User already exists" });
    }

    const password_hash = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: password_hash,
    });

    return res.status(200).json(user);
  },
};
