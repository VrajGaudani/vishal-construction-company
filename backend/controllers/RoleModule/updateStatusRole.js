const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const errorResponseHelper = require("../../Helper/errorResponse");
const { UserRoleModel } = require("../../models");
const moduleSchema = Joi.object({
  id: Joi.string().required(),
  status: Joi.boolean().required(),
  updatedBy: Joi.string().required(),
});

async function updateUserRole(req, res) {
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
    let bodyData = _.pick(req.body, ["id", "status", "updatedBy"]);
    let setData = {
      status: bodyData.status,
      updatedBy: bodyData.updatedBy,
    };
    let userRoleModule = await UserRoleModel.findOneAndUpdate(
      { _id: bodyData.id },
      { $set: setData },
      { new: true }
    ).lean();

    res.send({ status: true, message: "", data: userRoleModule });
  } catch (e) {
    console.log("Getting menu list err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Getting Menu list",
    });
  }
}

module.exports = updateUserRole;
