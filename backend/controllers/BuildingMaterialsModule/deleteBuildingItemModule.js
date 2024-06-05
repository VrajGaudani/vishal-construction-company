const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { BuildingMaterialsModel } = require("../../models");

const deleteSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function deleteBuildingItem(req, res) {
  try {
    let validateData = deleteSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    const deleteData = await BuildingMaterialsModel.deleteOne({
      _id: req.body._id,
    });
    console.log("deleteData is", deleteData);
    if (deleteData.deletedCount>0) {
      // if data found check verified or not
      res.send({ status: true, message: "Building Item Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Building Item not found" });
    }
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = deleteBuildingItem;
