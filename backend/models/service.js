const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    header: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
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
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ServiceModel = mongoose.model("service", serviceSchema);

module.exports = { ServiceModel };
