const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const errorResponseHelper = require("../../Helper/errorResponse");
const { SupplierModel } = require("../../models");
const deleteSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function deleteSupplierModule(req, res) {
  try {
    let validateData = deleteSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await SupplierModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "Supplier Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Supplier not found" });
    }
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = deleteSupplierModule;
