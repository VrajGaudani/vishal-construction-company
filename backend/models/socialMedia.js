const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema(
  {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    youtube: {
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

const SocialMediaModel = mongoose.model("socialMedia", socialMediaSchema);

module.exports = { SocialMediaModel };
