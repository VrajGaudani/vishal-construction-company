const errorResponseHelper = require("../../Helper/errorResponse");
const { FinanceModel } = require("../../models");

async function getFinanceData(req, res) {
  try {
    let query = { active: true };
    let findData = await FinanceModel.find(query).sort({ _id: -1 });

    res.send({ status: true, message: "", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting About Page Data",
    });
  }
}

module.exports = getFinanceData;
