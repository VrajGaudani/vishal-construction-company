const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { FeedbackModel } = require("../../models");

const moduleSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  city: Joi.string().required(),
  rating: Joi.number().required(),
  propertyId: Joi.string().allow("null"),
  message: Joi.string().required(),
});

async function updateFeedbackRequest(req, res) {
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
    // searching email or mobile already exists or not
    // let findData = await Models.FeedbackDB.findOne({ email: bodyData.email });
    // if (findData) {
    //     // if data found check
    //     throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateModule: true, statusCode: 401 };
    // }
    bodyData.image = req.files;
    let setData = {
      name: bodyData.name,
      rating: bodyData.rating,
      city: bodyData.city,
      propertyId: bodyData.propertyId,
      message: bodyData.message,
    };
    let updateModule = await FeedbackModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.UPDATE_SUCCESS_MESSAGE,
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

module.exports = updateFeedbackRequest;
