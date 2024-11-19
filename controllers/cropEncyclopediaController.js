const CropEncyclopedia = require("./../models/CropEncyclopedia");
const ObjectId = require("mongodb").ObjectId;

const getCropAboutAll = async (req, res) => {
  try {
    const cropData = await CropEncyclopedia.find({}).lean();

    if (!cropData?.length) {
      return res.status(400).json({ message: "Crop not found." });
    }
    return res.status(200).json(cropData);  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCropAbout = async (req, res) => {
  try {
    const cropId = req.params.id;
    const c_id = new ObjectId(cropId);

    const cropData = await CropEncyclopedia.find({ _id: c_id }).lean();

    if (!cropData?.length) {
      return res.status(400).json({ message: "Crop not found." });
    }
    return res.status(200).json(cropData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCropAbout, getCropAboutAll };
