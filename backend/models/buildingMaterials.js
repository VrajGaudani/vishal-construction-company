const mongoose = require("mongoose");

const buildingMaterialsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
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

const BuildingMaterialsModel = mongoose.model(
  "buildingMaterials",
  buildingMaterialsSchema
);

module.exports = { BuildingMaterialsModel };
