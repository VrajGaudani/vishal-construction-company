const mongoose = require("mongoose");

const homeAboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    header: {
      type: String,
      required: true,
      trim: true,
    },
    aboutImages: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
    metaTitle: {
      type: String,
    },
    metaKeywords: {
      type: String,
    },
    metaDescription: {
      type: String,
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

const HomeAboutModel = mongoose.model("homeAbout", homeAboutSchema);

module.exports = { HomeAboutModel };
