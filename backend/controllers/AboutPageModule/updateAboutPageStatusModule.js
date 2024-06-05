const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { AboutPageModel } = require("../../models");

const updateStatusSchema = Joi.object({
  _id: Joi.string().required(),
  active: Joi.boolean().required(),
});

async function updateAboutPageStatus(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    const validateData = updateStatusSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    const bodyData = req.body;
    const setData = {
      active: bodyData.active,
    };
    const updateModule = await AboutPageModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("updateModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in updateModule",
    });
  }
}

module.exports = updateAboutPageStatus;
