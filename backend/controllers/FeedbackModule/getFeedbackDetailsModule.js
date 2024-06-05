const _ = require("lodash");
const Joi = require("joi");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const errorResponseHelper = require("../../Helper/errorResponse");
const { FeedbackModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
});

async function getFeedbackDetails(req, res) {
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
    let findData = await FeedbackModel.findOne({ _id: bodyData._id }).lean();
    if (!findData) {
      res.send({
        status: false,
        message: "Feedback not Found",
        data: findData,
      });
      return;
    }
    res.send({ status: true, message: "Feedback Found", data: findData });
  } catch (e) {
    console.log("Getting err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting",
    });
  }
}

module.exports = getFeedbackDetails;
