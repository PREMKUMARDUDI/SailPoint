const { Signup, Login } = require("../controllers/AuthController");
const {
  userVerification,
  verifyToken,
} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

// Handle OPTIONS preflight request for /verify
router.options("/verify", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://sailpoint-frontend.onrender.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(204); // No Content, just headers
});

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

router.post(
  "/verify",
  (req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://sailpoint-frontend.onrender.com"
    );
    console.log("Verify request received:", req.body);
    verifyToken(req, res, next);
  },
  (req, res) => {
    console.log("Verify response sent:", { status: true, user: req.user });
    res.json({ status: true, user: req.user });
  }
);

module.exports = router;
