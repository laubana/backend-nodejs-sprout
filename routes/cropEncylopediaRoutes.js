const express = require("express");
const router = express.Router();
const cropEncyclopediaController = require("./../controllers/cropEncyclopediaController");

router
    .route("/cropencyclopedias/:id")
    .get(cropEncyclopediaController.getCropAbout);

router
    .route("/cropencyclopedias")
    .get(cropEncyclopediaController.getCropAboutAll)

module.exports = router;