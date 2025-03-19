const { Signup, Login } = require("../controllers/AuthController");
const {
  userVerification,
  verifyToken,
} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

router.post(
  "/verify",
  (req, res, next) => {
    console.log("Verify request received:", req.body);
    verifyToken(req, res, next);
  },
  (req, res) => {
    console.log("Verify response sent:", { status: true, user: req.user });
    res.json({ status: true, user: req.user });
  }
);

module.exports = router;
