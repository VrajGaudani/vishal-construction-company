const mongoose = require("mongoose");

const dealingInItemSchema = new mongoose.Schema(
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
    icon: {
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

const DealingInItemModel = mongoose.model("dealingInItem", dealingInItemSchema);

module.exports = { DealingInItemModel };
