const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { AboutPageModel } = require("../../models");

const getSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function getAboutPageDetail(req, res) {
  try {
    const validateData = getSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }
    const findData = await AboutPageModel.findOne({ _id: req.body._id });
    //findData.image = findData.image[0];
    if (!findData) {
      res.send({ status: false, message: "Data not found", data: findData });
      return;
    }
    res.send({ status: true, message: "Data found", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting About Page Detail Data",
    });
  }
}

module.exports = getAboutPageDetail;
