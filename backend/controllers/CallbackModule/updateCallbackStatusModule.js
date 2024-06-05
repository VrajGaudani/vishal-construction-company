const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { ReqCallbackModel } = require("../../models");
const schema = Joi.object({
  id: Joi.string().required(),
  status: Joi.boolean().required(),
});

async function updateCallbackStatus(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    let bodyData = req.body;
    let setData = {
      status: bodyData.status,
    };
    let updateModule = await ReqCallbackModel.findOneAndUpdate(
      { _id: bodyData.id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });
  } catch (e) {
    console.log("updateModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in updateModule",
    });
  }
}

module.exports = updateCallbackStatus;
