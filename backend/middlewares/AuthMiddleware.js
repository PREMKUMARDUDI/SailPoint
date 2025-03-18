const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UsersModel.findById(data.id).select(
        "username email -_id"
      );
      if (user) {
        return res.json({
          status: true,
          user: {
            username: user.username,
            email: user.email,
          },
        });
      } else {
        return res.json({ status: false });
      }
    }
  });
};

module.exports.verifyToken = (req, res, next) => {
  const token = req.body.token; // Token from request body
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.json({ status: false });
    }
    req.user = decoded;
    next();
  });
};
