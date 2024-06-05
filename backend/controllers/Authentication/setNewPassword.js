const Joi = require("joi");
const bcrypt = require("bcryptjs");
const errorResponseHelper = require("../../Helper/errorResponse");
const { UserModel } = require("../../models");

const setNewPasswordSchema = Joi.object({
  newPassword: Joi.string().required(),
  token: Joi.string().required(),
});

async function setNewPassword(req, res) {
  try {
    // console.log(req.sessionID)
    let payload = req.body;
    // validate data using joi
    const validateData = setNewPasswordSchema.validate(payload);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: "Invalid data",
        validationError: true,
      };
    }

    const userData = await UserModel.findOne({
      forgetPasswordToken: payload.token,
    }).lean();

    if (!userData) {
      throw {
        status: false,
        error: true,
        message: "Not authorised",
        statusCode: 401,
      };
    }

    const hash = await bcrypt.hash(payload.newPassword, 10);

    let setData = {
      password: hash,
    };
    if (!userData.verified) {
      setData.verified = true;
      setData.verificationDate = new Date();
    }

    const updateUserData = await UserModel.findOneAndUpdate(
      { _id: userData._id },
      { $set: setData },
      { new: true }
    ).lean();

    if (!updateUserData) {
      throw {
        status: false,
        error: true,
        message: "Errow while updating new password",
        statusCode: 500,
      };
    }

    res.send({
      status: true,
      message: "Password has been successfully updated",
    });
  } catch (e) {
    console.log("login err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in set new password",
    });
  }
}
module.exports = setNewPassword;
