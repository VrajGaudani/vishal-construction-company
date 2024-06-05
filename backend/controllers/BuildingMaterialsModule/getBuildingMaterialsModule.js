const errorResponseHelper = require("../../Helper/errorResponse");
const { BuildingMaterialsModel } = require("../../models");

async function getBuildingMaterials(req, res) {
  try {
    let findData = await BuildingMaterialsModel.find({ isDisable: false }).sort(
      { _id: -1 }
    );

    res.send({ status: true, message: "", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = getBuildingMaterials;
