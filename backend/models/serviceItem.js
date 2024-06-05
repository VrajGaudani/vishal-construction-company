const mongoose = require("mongoose");

const serviceItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    shortDescription: {
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
    media: {
      type: Array,
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

const ServiceItemModel = mongoose.model("serviceItem", serviceItemSchema);

module.exports = { ServiceItemModel };
