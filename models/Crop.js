const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const CropSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    idealTemperature: {
      fahrenheit: {
        min: {
          type: Number,
        },
        max: {
          type: Number,
        },
      },
      celcius: {
        min: {
          type: Number,
        },
        max: {
          type: Number,
        },
      },
    },
    humidity: {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
    },
    growthDuration: {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
    },
    soilPh: {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
    },
    soilN: {
      type: Number,
      required: true,
    },
    soilP: {
      type: Number,
      required: true,
    },
    soilK: {
      type: Number,
      required: true,
    },
    growingTips: {
      type: Array,
    },
    tools: {
      type: Array,
    },
    imageURL: {
      type: String,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
    isFavorite: {
      type: Boolean,
    },
    isPlanted: {
      type: Boolean,
      required: true,
    },
    datePlanted: {
      type: Date,
    },
    estimatedYield: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Crop", CropSchema);
