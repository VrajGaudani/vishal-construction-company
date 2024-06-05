const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const OtpModel = mongoose.model("otp", otpSchema);

module.exports = { OtpModel };
