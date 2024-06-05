const mongoose = require("mongoose");

const pImageSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      default: null,
    },
    mainImage: {
      type: Array,
    },
    exteriorView: {
      type: Array,
    },
    livingRoom: {
      type: Array,
    },
    bedrooms: {
      type: Array,
    },
    bathrooms: {
      type: Array,
    },
    kitchen: {
      type: Array,
    },
    floorPlan: {
      type: Array,
    },
    masterPlan: {
      type: Array,
    },
    other: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const PImageModel = mongoose.model("pImage", pImageSchema);

module.exports = { PImageModel };
