const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const { MenuModel } = require("../../models");

async function getAllMenuList(req, res) {
  try {
    let findData = await MenuModel.find();
    res.send({ status: true, message: "All Menu List is", data: findData });
  } catch (e) {
    console.log("Getting menu list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting Menu list",
    });
  }
}

module.exports = getAllMenuList;
