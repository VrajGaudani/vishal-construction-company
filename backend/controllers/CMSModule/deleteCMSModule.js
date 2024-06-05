const _ = require("lodash");
const Joi = require("joi");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");

const errorResponseHelper = require("../../Helper/errorResponse");
const { CmsModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
});

async function deleteCMS(req, res) {
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
    let findData = await CmsModel.deleteOne({ _id }).lean();
    res.send({ status: true, message: "CMS Deleted.", data: findData });
  } catch (e) {
    console.log("Getting Delete err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Delete Details",
    });
  }
}

module.exports = deleteCMS;
