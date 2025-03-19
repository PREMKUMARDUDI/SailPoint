const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }
    const user = await UsersModel.findById(data.id).select(
      "username email -_id"
    );
    if (user) {
      return res.json({
        status: true,
        user: { username: user.username, email: user.email },
      });
    }
    return res.json({ status: false });
  });
};

module.exports.verifyToken = (req, res, next) => {
  const token = req.body.token;
  console.log("Verify request received with token:", token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.json({ status: false });
    }
    req.user = decoded;
    console.log("Token verified successfully:", decoded);
    next();
  });
};
