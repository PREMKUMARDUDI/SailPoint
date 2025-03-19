const { UsersModel } = require("../model/UsersModel"); // Ensure path is correct
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email }).lean();
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({
      email,
      password,
      username,
      createdAt,
    });
    const token = createSecretToken(user._id);
    console.log("Signup success, sending token:", token);
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      token: token,
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received:", { email });
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    console.time("Find user");
    const user = await UsersModel.findOne({ email }).lean();
    console.timeEnd("Find user");
    if (!user) {
      return res.status(404).json({ message: "Incorrect password or email" });
    }
    console.time("Bcrypt compare");
    const auth = await bcrypt.compare(password, user.password);
    console.timeEnd("Bcrypt compare");
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = createSecretToken(user._id);
    console.log("Login success, sending token:", token);
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token: token,
    });
    next();
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
