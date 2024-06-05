const mongoose = require("mongoose");

const reqCallbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
      default: null,
    },
    isVisit: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ReqCallbackModel = mongoose.model("reqCallback", reqCallbackSchema);

module.exports = { ReqCallbackModel };
