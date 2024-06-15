const UserModel = require("../../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "USER NOT FOUND" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      "JWT_SECRET"
    );

    res.status(201).json({ msg: "User Login Successfully", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
