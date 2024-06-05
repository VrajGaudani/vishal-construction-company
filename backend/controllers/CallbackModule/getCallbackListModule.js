const Joi = require("joi");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const errorResponseHelper = require("../../Helper/errorResponse");
const { ReqCallbackModel } = require("../../models");

const moduleSchema = Joi.object({
  keyWord: Joi.string().empty(""),
  pageNo: Joi.number().integer().min(1),
  size: Joi.number().integer().min(1),
});

async function getCallbackList(req, res) {
  try {
    let validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }
    let bodyData = req.body;
    let query = {};
    if (bodyData.keyWord && bodyData.keyWord !== "") {
      query = { name: { $regex: bodyData.keyWord, $options: "i" } };
    }
    let findData = await ReqCallbackModel.find(query)
      .skip(bodyData.size * (bodyData.pageNo - 1))
      .limit(bodyData.size)
      .sort({ _id: -1 })
      .populate("propertyId");
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

module.exports = getCallbackList;
