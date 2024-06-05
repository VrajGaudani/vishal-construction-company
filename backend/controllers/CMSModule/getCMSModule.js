const _ = require("lodash");
const Joi = require("joi");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const errorResponseHelper = require("../../Helper/errorResponse");
const { CmsModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
});

async function getCMS(req, res) {
  try {
    let validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }
    let bodyData = _.pick(req.body, ["_id"]);
    let _id = bodyData._id;
    let findData = await CmsModel.findOne({ _id }).lean();
    res.send({ status: true, message: "CMS Details", data: findData });
  } catch (e) {
    console.log("Getting Details err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting Details",
    });
  }
}

module.exports = getCMS;
