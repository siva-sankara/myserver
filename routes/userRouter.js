const express = require("express");
const { sendOtp, signUp, logIn } = require("../controller/auth");
const {
  generateResetLink,
  resetPassword,
} = require("../controller/ChangePassword");
const router = express.Router();

router
  .post("/sendotp", sendOtp)
  .post("/signup", signUp)
  .post("/login", logIn)
  .post("/resetpasswordtoken", generateResetLink)
  .post("/resetpassword/:id", resetPassword);

module.exports = router;
