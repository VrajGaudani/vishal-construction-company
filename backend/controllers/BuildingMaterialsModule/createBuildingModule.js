const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { BuildingMaterialsModel } = require("../../models");

const moduleSchema = Joi.object({
  name: Joi.string().required(),
});

async function createBuilding(req, res) {
  try {
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
    let findData = await BuildingMaterialsModel.findOne({
      name: bodyData.name,
    });

    if (findData) {
      // if data found check
      throw {
        status: false,
        error: true,
        message: CONSTANTSMESSAGE.ALREADY_EXIST,
        duplicateModule: true,
        statusCode: 401,
      };
    }

    if (req.files.length > 0) bodyData.image = req.files;

    let saveModule = await new BuildingMaterialsModel(bodyData).save();
    console.log("saveModule is", saveModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE,
    });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in saveModule",
    });
  }
}
module.exports = createBuilding;
