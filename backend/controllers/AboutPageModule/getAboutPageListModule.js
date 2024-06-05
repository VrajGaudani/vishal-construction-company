const errorResponseHelper = require("../../Helper/errorResponse");
const { AboutPageModel } = require("../../models");

async function getAboutPageList(req, res) {
  try {
    const findData = await AboutPageModel.find().sort({ createdAt: -1 });

    res.send({ status: true, message: "", data: findData });
  } catch (e) {
    console.log("Getting list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting About Page List Data.",
    });
  }
}

module.exports = getAboutPageList;
