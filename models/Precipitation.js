const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PrecipitationSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    precipitation: {
      // this is in mm
      type: Number,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Precipitation", PrecipitationSchema);
