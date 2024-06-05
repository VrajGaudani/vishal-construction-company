const createBuilding = require("./createBuildingModule");
const getBuildingList = require("./getBuildingListModule");
const getBuildingMaterials = require("./getBuildingMaterialsModule");
const updateBuildingStatus = require("./updateBuildingStatusModule");
const updateBuilding = require("./updateBuildingModule");
const getBuildingItem = require("./getBuildingItemModule");
const deleteBuildingItem = require("./deleteBuildingItemModule");

module.exports = {
  createBuilding,
  getBuildingList,
  getBuildingMaterials,
  updateBuildingStatus,
  updateBuilding,
  getBuildingItem,
  deleteBuildingItem,
};
