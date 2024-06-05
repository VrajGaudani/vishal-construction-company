const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const errorResponseHelper = require("../../Helper/errorResponse");
const { PropertyModel } = require("../../models");
const moduleSchema = Joi.object({
  userId: Joi.string().required(),
});

async function getUserIdPropertyList(req, res) {
  try {
    let validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body

    let bodyData = _.pick(req.body, ["userId"]);
    // let uID = mongoose.Types.ObjectId(bodyData.userId);
    let findData = await PropertyModel.aggregate([
      {
        $match: {
          userId: new ObjectId(bodyData.userId),
        },
      },
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
      {
        $lookup: {
          from: "pPrice",
          localField: "_id",
          foreignField: "propertyId",
          as: "price",
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

module.exports = getUserIdPropertyList;
