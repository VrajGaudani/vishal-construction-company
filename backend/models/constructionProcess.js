const mongoose = require("mongoose");

const constructionProcessSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
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

const ConstructionProcessModel = mongoose.model(
  "constructionProcess",
  constructionProcessSchema
);

module.exports = { ConstructionProcessModel };
