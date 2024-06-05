const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { FinanceModel } = require("../../models");
const moduleSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

async function createFinance(req, res) {
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
    let bodyData = _.pick(req.body, [
      "title",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);
    let findData = await FinanceModel.findOne({ title: bodyData.title });

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
    bodyData.media = req.files;
    let saveModule = await new FinanceModel(bodyData).save();
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
module.exports = createFinance;
