const _ = require("lodash");
const errorResponseHelper = require("../../Helper/errorResponse");
const { FeedbackModel } = require("../../models");

async function getFeedbackForHomeModule(req, res) {
  try {
    let query = {};
    query = { status: true };
    let findData = await FeedbackModel.find(query)
      .sort({ _id: -1 })
      .populate("propertyId");
    if (findData.length) {
      res.send({ status: true, message: "Client Feedbacks", data: findData });
    } else {
      res.send({
        status: true,
        message: "No Active Feedbacks Feedbacks",
        data: findData,
      });
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

module.exports = getFeedbackForHomeModule;
