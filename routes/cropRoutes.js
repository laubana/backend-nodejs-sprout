const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");

router.route("/plant-now").put(cropController.plantNow);

router
  .route("/crops")
  .get(cropController.getAllCrops)
  .post(cropController.plant)
  .put(cropController.favoriteCrop)
  .delete(cropController.removeCrop);

module.exports = router;
