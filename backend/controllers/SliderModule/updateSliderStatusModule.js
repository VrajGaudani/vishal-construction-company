const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { SliderModel } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().required(),
  isDisable: Joi.boolean().required(),
});

async function updateSliderStatus(req, res) {
  try {
    // validate data using joi
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    let bodyData = _.pick(req.body, ["isDisable", "_id"]);
    let setData = {
      isDisable: bodyData.isDisable,
    };
    let updateModule = await SliderModel.findOneAndUpdate(
      { _id: bodyData._id },
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

module.exports = updateSliderStatus;
