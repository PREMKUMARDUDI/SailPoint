const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const { verifyToken } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

router.post("/verify", verifyToken, (req, res) => {
  res.json({ status: true, user: req.user });
});

module.exports = router;
