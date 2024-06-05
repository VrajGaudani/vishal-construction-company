const errorResponseHelper = require("../../Helper/errorResponse");
const { ContactUsModel } = require("../../models");

async function getContactUsList(req, res) {
  try {
    let findData = await ContactUsModel.find({}).sort({ _id: -1 });
    let obj = {
      total: findData.length,
      list: findData,
    };
    res.send({ status: true, message: "", data: obj });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting list",
    });
  }
}

module.exports = getContactUsList;
