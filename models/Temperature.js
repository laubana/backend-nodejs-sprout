const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const TemperatureSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    high: {
      type: Number,
    },
    low: {
      type: Number,
    },
    mean: {
      type: Number,
      required: true,
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

module.exports = mongoose.model("Temperature", TemperatureSchema);
