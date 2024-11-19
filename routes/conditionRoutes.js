const express = require("express");
const router = express.Router();
const conditionController = require("../controllers/conditionController");

router.route("/predict-crop").post(conditionController.predictCrop);
router.route("/predict-yield").post(conditionController.predictYield);

module.exports = router;
