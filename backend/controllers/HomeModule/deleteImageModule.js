const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const deleteSchema = Joi.object({
  documentId: Joi.objectId().trim().required(),
  imageName: Joi.string().trim().required(),
});

async function deleteFunction(req, res) {
  try {
    let validateData = updateAddressSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["documentId", "imageName"]);
    res.send({ status: true, message: "Dashboard Details", data: [] });
    let documentId = bodyData.documentId;
    let imageName = bodyData.imageName;
    let imageFrom = imageName.split("-")[0];
  } catch (e) {
    console.log("Dashboard Details err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Dashboard Details",
    });
  }
}

module.exports = deleteFunction;
