const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    isDirector: {
      type: Boolean,
      required: true,
      default: false,
    },
    designation: {
      type: String,
      default: "",
    },
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: Array,
    },
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
    isDisable: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TeamModel = mongoose.model("team", teamSchema);

module.exports = { TeamModel };
