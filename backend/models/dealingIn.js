const mongoose = require("mongoose");

const dealingInSchema = new mongoose.Schema(
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

const DealingInModel = mongoose.model("dealingIn", dealingInSchema);

module.exports = { DealingInModel };
