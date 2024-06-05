const errorResponseHelper = require("../../Helper/errorResponse");
const { AboutPageModel } = require("../../models");

async function getAboutPageData(req, res) {
  try {
    const query = { active: true };
    const findData = await AboutPageModel.find(query);

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

module.exports = getAboutPageData;
