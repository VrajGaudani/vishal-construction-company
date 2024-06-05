const mongoose = require("mongoose");

const homeMovingBannerSchema = new mongoose.Schema(
  {
    years: {
      type: Number,
      required: true,
    },
    projects: {
      type: Number,
      required: true,
    },
    clients: {
      type: Number,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const HomeMovingBannerModel = mongoose.model(
  "homeMovingBanner",
  homeMovingBannerSchema
);

module.exports = { HomeMovingBannerModel };
