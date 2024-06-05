const mongoose = require("mongoose");

const cmsSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    pageName: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
    },
    pageUrl: {
      type: String,
    },
    pageTitle: {
      type: String,
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
    image: {
      type: Array,
    },
    pageSortDescription: {
      type: String,
    },
    pageDescription: {
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

const CmsModel = mongoose.model("cms", cmsSchema);

module.exports = { CmsModel };
