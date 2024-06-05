const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { BuildingMaterialsModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
});

async function updateBuilding(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    let validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body

    let bodyData = req.body;

    let setData = {
      name: bodyData.name,
    };
    if (req.files) {
      bodyData.image = req.files;
      setData["image"] = bodyData.image;
    }
    let updateModule = await BuildingMaterialsModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in saveModule",
    });
  }
}
module.exports = updateBuilding;
