const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    iAm: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    propertyCode: {
      type: String,
      trim: true,
    },
    propertyTag: {
      type: String,
    },
    for: {
      type: String,
      default: "Sell",
    },
    pType: {
      type: String,
    },
    postingAs: {
      type: String,
    },
    pCity: {
      type: String,
    },
    nameOfProject: {
      type: String,
    },
    locality: {
      type: String,
    },
    propertyDetails: {
      type: Array,
    },
    landZone: {
      type: String,
    },
    idealForBusinesses: {
      type: String,
    },
    status: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const PropertyModel = mongoose.model("property", propertySchema);

module.exports = { PropertyModel };
