const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { SliderModel } = require("../../models");
const moduleSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
});

async function updateSlider(req, res) {
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

    let bodyData = _.pick(req.body, [
      "_id",
      "name",
      "description",
      "metaTitle",
      "metaKeywords",
      "metaDescription",
    ]);

    let setData = {
      name: bodyData.name,
      description: bodyData.description,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };
    if (req.files.length > 0) {
      bodyData.image = req.files;
      setData["image"] = bodyData.image;
    }
    let updateModule = await SliderModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: "Slider Updated Successfully." });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in saveModule",
    });
  }
}

module.exports = updateSlider;
