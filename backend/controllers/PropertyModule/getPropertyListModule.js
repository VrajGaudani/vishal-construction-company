const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const errorResponseHelper = require("../../Helper/errorResponse");
const { PropertyModel } = require("../../models");

async function getPropertyList(req, res) {
  try {
    let findData = await PropertyModel.aggregate([
      {
        $lookup: {
          from: "pFeatures",
          localField: "_id",
          foreignField: "propertyId",
          as: "features",
        },
      },
      {
        $lookup: {
          from: "pImage",
          localField: "_id",
          foreignField: "propertyId",
          as: "images",
        },
      },
    ]).sort({ _id: -1 });
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

module.exports = getPropertyList;
