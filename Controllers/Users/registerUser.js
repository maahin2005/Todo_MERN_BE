const UserModel = require("../../Model/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(203).json({ msg: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ msg: "user registered successfully", newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;
