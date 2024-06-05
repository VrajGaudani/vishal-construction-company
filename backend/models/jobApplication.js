const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    careerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "career",
      default: null,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
    },
    resume: {
      type: Array,
    },
    mobile: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const JobApplicationModel = mongoose.model(
  "jobApplication",
  jobApplicationSchema
);

module.exports = { JobApplicationModel };
