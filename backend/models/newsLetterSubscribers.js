const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsLetterModel = mongoose.model(
  "newsLetterSubscribers",
  newsletterSchema
);

module.exports = { NewsLetterModel };
