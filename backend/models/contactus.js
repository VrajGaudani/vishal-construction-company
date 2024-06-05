const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ContactUsModel = mongoose.model("contactus", contactUsSchema);

module.exports = { ContactUsModel };
