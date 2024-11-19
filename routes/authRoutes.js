const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const singleUpload = require("../middleware/singleUpload");

router.route("/register").post(singleUpload, authController.register);

router.route("/forgot-password").put(authController.forgotPassword);

router.route("/login").post(authController.login);

router.route("/refresh").get(authController.refresh);

router.route("/logout").post(authController.logout);

module.exports = router;
