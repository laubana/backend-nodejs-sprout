const Crop = require("../models/Crop");
const Crops = require("../models/Crop");
const CropEncyclopedia = require("./../models/CropEncyclopedia");
const { ObjectId } = require("mongodb");

const getAllCrops = async (req, res) => {
  try {
    const userId = req.id;
    const { isPlanted } = req.query;
    let crops;
    if (
      isPlanted !== undefined &&
      isPlanted !== "" &&
      isPlanted !== null &&
      (isPlanted == "true" || isPlanted == "false")
    ) {
      crops = await Crops.find({ userId, isPlanted }).lean();
    } else {
      crops = await Crops.find({ userId }).lean();
    }

    if (!crops?.length) {
      return res.status(400).json({ message: "No crops found." });
    }
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//plant later/now from crop guide or from your-crops (new-crop)
const plant = async (req, res) => {
  try {
    const userId = req.id;
    const { cropId, plantNow, estimatedYield } = req.body;
    if (!ObjectId.isValid(cropId)) throw new Error("Invalid Id");

    if (!cropId && plantNow === undefined && typeof plantNow !== "boolean") {
      return res
        .status(400)
        .json({ message: "Crop Id and plant now is required" });
    }

    if (plantNow && !estimatedYield) {
      return res.status(400).json({ message: "Estimated yield is required" });
    }
    const cropEnc = await CropEncyclopedia.findById(cropId)
      .select("-_id -createdAt -updatedAt")
      .lean();

    let cropData;
    if (cropEnc) {
      if (plantNow) {
        cropData = await Crop.create({
          userId,
          isFavorite: false,
          isPlanted: plantNow,
          datePlanted: new Date(),
          estimatedYield,
          ...cropEnc,
        });
      } else {
        cropData = await Crop.create({
          userId,
          isFavorite: false,
          isPlanted: plantNow,
          ...cropEnc,
        });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Crop from encylopedia not found" });
    }

    res.status(201).json(cropData);
  } catch (error) {
    res.status(500).json({ message: "An error occured" });
  }
};

const favoriteCrop = async (req, res) => {
  try {
    const { id, isFavorite } = req.body;
    const updatedCrop = await Crops.findByIdAndUpdate(
      id,
      { $set: { isFavorite } },
      { new: true }
    );
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//plant now to be used in your crops when the plant is currently on plant later
const plantNow = async (req, res) => {
  try {
    const { id, estimatedYield } = req.body;
    if (!id && !estimatedYield) {
      return res.status(400).json({ message: "Estimated Yield is required." });
    }
    const updatedCrop = await Crops.findByIdAndUpdate(
      id,
      { $set: { isPlanted: true, estimatedYield, datePlanted: new Date() } },
      { new: true }
    );
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCrop = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedCrop = await Crops.findByIdAndRemove(id);

    if (!deletedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    return res.status(204).json({ message: "Crop deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllCrops,
  favoriteCrop,
  removeCrop,
  plantNow,
  plant,
};
