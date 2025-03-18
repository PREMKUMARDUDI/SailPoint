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
    res.cookie("token", token, {
      httpOnly: true, // Allow frontend access
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      path: "/",
    });
    console.log("Signup: Token set:", token);
    console.log("Signup: Response headers:", res.getHeaders());
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
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
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UsersModel.findOne({ email }).lean();
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, // Allow frontend access
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/",
    });
    console.log("Login: Token set:", token);
    console.log("Login: Response headers:", res.getHeaders());
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
