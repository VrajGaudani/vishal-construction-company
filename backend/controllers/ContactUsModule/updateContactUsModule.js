const _ = require("lodash");
const Joi = require("joi");

const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { ContactUsModel } = require("../../models");
const moduleSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

async function updateContactUs(req, res) {
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

    let bodyData = _.pick(req.body, ["id", "name", "desc", "URL"]);

    let setData = {
      name: bodyData.name,
      desc: bodyData.desc,
      URL: bodyData.URL,
    };
    if (req.files.length > 0) {
      bodyData.image = req.files;
      setData["image"] = bodyData.image;
    }
    let updateModule = await ContactUsModel.findOneAndUpdate(
      { _id: bodyData.id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in saveModule",
    });
  }
}

module.exports = updateContactUs;
