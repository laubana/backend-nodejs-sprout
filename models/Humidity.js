const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const HumiditySchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    humidity: {
      // this is in %
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

module.exports = mongoose.model("Humidity", HumiditySchema);
