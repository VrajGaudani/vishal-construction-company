const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { ServiceModel } = require("../../models");
const moduleSchema = Joi.object({
  name: Joi.string().required(),
  shortDesc: Joi.string().required(),
  desc: Joi.string().required(),
});

async function createServices(req, res) {
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
    let bodyData = _.pick(req.body, ["name", "shortDesc", "desc"]);
    let findData = await ServiceModel.findOne({ name: bodyData.name });

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
    bodyData.image = req.files;
    let saveModule = await new ServiceModel(bodyData).save();
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

module.exports = createServices;
