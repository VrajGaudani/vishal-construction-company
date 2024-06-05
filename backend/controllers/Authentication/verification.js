const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const { UserModel } = require("../../models");

const verificationSchema = Joi.object({
  token: Joi.string().required(),
});

async function verification(req, res) {
  try {
    let payload = req.body;
    // validate data using joi
    const validateData = verificationSchema.validate(payload);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: "Invalid data",
        validationError: true,
      };
    }

    const userData = await UserModel.findOneAndUpdate(
      { verificationToken: payload.token, verified: false },
      {
        $set: { verificationDate: new Date(), verified: true },
      },
      { new: true }
    ).lean();
    // console.log('userData', userData, payload);
    if (!userData) {
      throw {
        status: false,
        error: true,
        message: "Invalid token",
        statusCode: 401,
      };
    }
    res.send({ status: true, message: "Successfully verified" });
  } catch (e) {
    console.log("verification err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Verification",
    });
  }
}
module.exports = verification;
