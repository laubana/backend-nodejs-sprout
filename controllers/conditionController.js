const Humidity = require("../models/Humidity");
const Temperature = require("../models/Temperature");
const Precipitation = require("../models/Precipitation");
const axios = require("axios");
const CropEncyclopedia = require("./../models/CropEncyclopedia");
const { capitalizeFirstLetter } = require("../helpers/formatter");
const calculateAverageCondition = require("../helpers/calculator");

const predictCrop = async (req, res) => {
  try {
    // let { city, month, N, P, K, ph } = req.body;
    // if (city == undefined) {
    //   return res.status(400).json({
    //     message:
    //       "Sorry, this location is out of scope of Sprout. Please select different location.",
    //   });
    // }
    // if (!city || !month) {
    //   return res.status(400).json({ message: "All fields are required." });
    // }
    // city = city.toLowerCase();
    // month = month[0].toUpperCase() + month.slice(1);
    // const humidity = await Humidity.find({ city, month })
    //   .select("humidity")
    //   .lean();
    // const temperature = await Temperature.find({ city, month })
    //   .select("mean")
    //   .lean();
    // const precipitation = await Precipitation.find({ city, month })
    //   .select("precipitation")
    //   .lean();
    // if (
    //   humidity.length == 0 ||
    //   temperature.length == 0 ||
    //   precipitation.lengt == 0
    // ) {
    //   return res.status(400).json({
    //     message:
    //       "Sorry, this location is out of scope of Sprout. Please select different location.",
    //   });
    // }
    // const url = "http://127.0.0.1:5000/predict-crop";
    // const url = "https://crpo-ml.onrender.com/predict-crop";
    // const data = {
    //   humidity: humidity[0]["humidity"],
    //   temperature: temperature[0]["mean"],
    //   rainfall: precipitation[0]["precipitation"],
    //   N,
    //   P,
    //   K,
    //   ph,
    // };
    // const result = await axios.post(url, data);
    // const predictedCrop = result.data.prediction;
    // const cropName = capitalizeFirstLetter(predictedCrop[0]);
    // let cropId;
    // if (cropName) {
    //   cropId = await CropEncyclopedia.find({ cropName }).select("_id").lean();
    //   cropId = cropId[0]["_id"];
    // }
    // res.status(200).json({ cropName, cropId });

    const existingCropEncyclopedias = await CropEncyclopedia.find().lean();

    const existingCropEncyclopedia =
      existingCropEncyclopedias[
        Math.floor(Math.random() * existingCropEncyclopedias.length)
      ];

    res.status(200).json({
      cropName: existingCropEncyclopedia.cropName,
      cropId: existingCropEncyclopedia._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const predictYield = async (req, res) => {
  try {
    // let { cropName, city } = req.body;

    // if (city == undefined) {
    //   return res.status(400).json({
    //     message:
    //       "Sorry, this location is out of scope of Sprout. Please select different location.",
    //   });
    // }

    // if (!city && !cropName) {
    //   return res.status(400).json({ message: "All fields are required." });
    // }

    // city = city.toLowerCase();

    // const temperature = await Temperature.find({ city }).select("mean").lean();

    // const precipitation = await Precipitation.find({ city })
    //   .select("precipitation")
    //   .lean();

    // if (temperature.length == 0 || precipitation.lengt == 0) {
    //   return res.status(400).json({
    //     message:
    //       "Sorry, this location is out of scope of Sprout. Please select different location.",
    //   });
    // }
    // const aveYearlyRainfall = calculateAverageCondition(
    //   precipitation,
    //   "precipitation"
    // );

    // const aveTemp = calculateAverageCondition(temperature, "mean");
    // cropName = capitalizeFirstLetter(cropName);

    // const url = "https://crpo-ml.onrender.com/predict-yield";
    // const data = {
    //   item: cropName,
    //   average_rain_fall_mm_per_year: aveYearlyRainfall,
    //   avg_temp: aveTemp,
    // };
    // const result = await axios.post(url, data);

    // res.status(200).json({ yield: result.data });

    res.status(200).json({ yield: (Math.random() * (15 - 5) + 5).toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  predictCrop,
  predictYield,
};
