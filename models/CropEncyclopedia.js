const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const CropEncyclopediaSchema = new mongoose.Schema(
    {
        cropName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        idealTemperature: {
            fahrenheit: {
                min: {
                    type: Number
                }, 
                max: {
                    type: Number
                }
            },
            celcius: {
                min: {
                    type: Number
                }, 
                max: {
                    type: Number
                }
            }
        },
        humidity: {
            min: {
                type: Number
            }, 
            max: {
                type: Number
            }
        },
        growthDuration: {
            min: {
                type: Number
            }, 
            max: {
                type: Number
            }
        },
        soilPh: {
            min: {
                type: Number
            }, 
            max: {
                type: Number
            }
        },
        soilN: {
            type: Number,
            required: true
        },
        soilP: {
            type: Number,
            required: true
        },
        soilK: {
            type: Number,
            required: true
        },
        growingTips: { 
            type: Array
        },
        tools: {
            type: Array
        },
        imageURL: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("CropEncyclopedia", CropEncyclopediaSchema);
