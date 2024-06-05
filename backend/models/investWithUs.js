const mongoose = require("mongoose");

const investWithUsSchema = new mongoose.Schema(
  {
    whatWeDoHeader: {
      type: String,
      trim: true,
    },
    whatWeDoDescription: {
      type: String,
      trim: true,
    },
    howToInvestTitle: {
      type: String,
      trim: true,
    },
    media: {
      type: Array,
    },
    howToInvest: {
      type: Array,
    },
    whatWeDo: {
      type: Array,
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

const InvestWithUsModel = mongoose.model("investWithUs", investWithUsSchema);

module.exports = { InvestWithUsModel };
