const { Signup, Login } = require("../controllers/AuthController");
const {
  userVerification,
  verifyToken,
} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();
const { UsersModel } = require("../model/UsersModel");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

router.post(
  "/verify",
  (req, res, next) => {
    console.log("Verify request received:", req.body);
    verifyToken(req, res, next); // Middleware decodes token, sets req.user
  },
  async (req, res) => {
    try {
      // Fetch full user data from database using req.user.id
      const user = await UsersModel.findById(req.user.id).select(
        "username email"
      ); // Select only needed fields
      if (!user) {
        console.log("Verify: User not found in DB for ID:", req.user.id);
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }

      // Combine req.user (JWT data) with DB data
      const userData = {
        id: req.user.id,
        username: user.username,
        email: user.email,
      };

      console.log("Verify response sent:", { status: true, user: userData });
      res.json({ status: true, user: userData });
    } catch (error) {
      console.error("Verify error:", error.message);
      res.status(500).json({ status: false, message: "Server error" });
    }
  }
);

module.exports = router;
