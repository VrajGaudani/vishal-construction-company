const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { AboutPageModel } = require("../../models");

const createSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
  imagePosition: Joi.string().required(),
});

async function createAboutPageData(req, res) {
  try {
    let validateData = createSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body
    const bodyData = req.body;
    const findData = await AboutPageModel.findOne({ title: bodyData.title });

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
    const saveModule = await new AboutPageModel(bodyData).save();
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
module.exports = createAboutPageData;
