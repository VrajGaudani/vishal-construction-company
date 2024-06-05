const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { BuildingMaterialsModel } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function getBuildingItem(req, res) {
  try {
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }
    let findData = await BuildingMaterialsModel.findOne({
      _id: req.body._id,
    }).lean();

    res.send({
      status: true,
      message: "Building Item Details",
      data: findData,
    });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = getBuildingItem;
