const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const errorResponseHelper = require("../../Helper/errorResponse");
const { SupplierModel } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function getSupplierDetail(req, res) {
  try {
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }
    let findData = await SupplierModel.findOne({ _id: req.body._id }).lean();

    res.send({ status: true, message: "Supplier Details", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = getSupplierDetail;
