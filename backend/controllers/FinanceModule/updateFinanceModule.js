const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { FinanceModel } = require("../../models");
const moduleUpdateSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
  description: Joi.string().required(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

async function updateFinance(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    let validateData = moduleUpdateSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body

    let bodyData = _.pick(req.body, [
      "_id",
      "title",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    let setData = {
      title: bodyData.title,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files) {
      bodyData.media = req.files;
    }
    let updateModule = await FinanceModel.findOneAndUpdate(
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
      defaultMessage: "Error in update",
    });
  }
}

module.exports = updateFinance;
