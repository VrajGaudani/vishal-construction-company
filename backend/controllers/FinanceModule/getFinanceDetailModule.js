const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { FinanceModel } = require("../../models");
const getSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function getFinanceDetail(req, res) {
  try {
    let validateData = getSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }
    let findData = await FinanceModel.find({ _id: req.body._id });
    // findData.image = findData.image[0];

    res.send({ status: true, message: "", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting Data",
    });
  }
}

module.exports = getFinanceDetail;
