const Joi = require("joi");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const errorResponseHelper = require("../../Helper/errorResponse");
const { FeedbackModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
});

async function getFeedbackDetails(req, res) {
  try {
    const validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }
    let bodyData = req.body;
    let findData = await FeedbackModel.findOne({ _id: bodyData._id }).lean();

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
