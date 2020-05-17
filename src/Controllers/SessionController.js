const User = require("../Models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;
    user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User not exists" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const { _id, name, email } = user;
      const response = {
        user: {
          _id,
          name,
          email,
        },
        token: jwt.sign({ id: user._id }, "levelaocontrarioelevel", {
          expiresIn: "7d",
        }),
      };

      return res.status(200).json(response);
    } else {
      return res.status(401).json({ error: "Password does not match" });
    }
  },
};
