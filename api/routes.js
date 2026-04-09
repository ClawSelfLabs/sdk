const express = require("express");
const { registerUser, getUser } = require("../auth/authController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/user/:id", getUser);

module.exports = router;
