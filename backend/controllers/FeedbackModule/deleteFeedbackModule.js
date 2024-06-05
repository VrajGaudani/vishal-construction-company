const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { FeedbackModel } = require("../../models");

const deleteSchema = Joi.object({
  _id: Joi.string().trim().required(),
});

async function deleteFeedbackData(req, res) {
  try {
    let validateData = deleteSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Home from Database
    let deleteData = await FeedbackModel.remove({ _id: req.body._id });
    if (deleteData.deleteCount > 0) {
      // if data found check verified or not
      res.send({ status: true, message: "Item Deleted Successfully." });
    } else {
      res.send({ status: false, message: "Item not found" });
    }
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting FeedbackDB Data",
    });
  }
}

module.exports = deleteFeedbackData;