const errorResponseHelper = require("../../Helper/errorResponse");
const { FinanceModel } = require("../../models");

async function getFinanceDataList(req, res) {
  try {
    let findData = await FinanceModel.find().sort({ _id: -1 });

    res.send({ status: true, message: "", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting Finance Data",
    });
  }
}

module.exports = getFinanceDataList;
