const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { AboutPageModel } = require("../../models");

const moduleUpdateSchema = Joi.object({
  _id: Joi.string().trim().required(),
  title: Joi.string().trim(),
  description: Joi.string(),
  metaTitle: Joi.string(),
  metaKeywords: Joi.string(),
  metaDescription: Joi.string(),
  imagePosition: Joi.string(),
});

async function updateAboutPage(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    const validateData = moduleUpdateSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body
    let bodyData = req.body;
    let setData = {
      title: bodyData.title,
      description: bodyData.description,
      imagePosition: bodyData.imagePosition,
      metaTitle: bodyData.metaTitle,
      metaKeywords: bodyData.metaKeywords,
      metaDescription: bodyData.metaDescription,
    };

    if (req.files) {
      bodyData.image = req.files;
      setData["image"] = bodyData.image;
    }

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
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in update",
    });
  }
}

module.exports = updateAboutPage;
