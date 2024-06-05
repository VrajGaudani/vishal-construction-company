const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { prepareTemplateSendMail } = require("./signup");
const errorResponseHelper = require("../../Helper/errorResponse");
const {
  UserModel,
  OtpModel,
  MenuModel,
  AuthTokenModel,
} = require("../../models");

const logInSchema = Joi.object({
  mobile: Joi.number().required(),
  otp: Joi.number().required(),
});

async function mobileLogIn(req, res) {
  try {
    // console.log(req.sessionID)
    let payload = req.body;
    // validate data using joi
    const validateData = logInSchema.validate(payload);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: "Invalid data",
        validationError: true,
      };
    }

    let userData = await UserModel.findOne({ mobile: payload.mobile })
      .populate("userRole")
      .lean();
    if (!userData) {
      throw {
        status: false,
        error: true,
        message: "Mobile Number is incorrect",
        statusCode: 401,
        dataIncorrect: true,
      };
    }

    // checking otp
    const otpQuery = {
      $and: [
        { mobile: payload.mobile },
        { otp: payload.otp },
        { isExpired: false },
      ],
    };
    const isValidOTP = await OtpModel.findOne(otpQuery);
    if (!isValidOTP) {
      throw {
        status: false,
        error: true,
        message: "Invalid OTP Please Try Again.",
        statusCode: 401,
        dataIncorrect: true,
      };
    }

    if (!userData.verified) {
      // user is not verified then send verification email again
      prepareTemplateSendMail(userData);
      throw {
        status: false,
        error: true,
        message: "Please verify your account",
        notVerified: true,
        mailSent: true,
        statusCode: 401,
      };
    }
    // if not active, ie disabled by admin
    if (!userData.active) {
      throw {
        status: false,
        error: true,
        message: "Your account has been disabled. Please contact admin",
        adminDisable: true,
        statusCode: 401,
      };
    }
    const roleName = await MenuModel.find({
      _id: { $in: userData.userRole.rights },
    });
    console.log(roleName);
    // create token and add in token collection
    const token = jwt.sign(
      { date: new Date(), email: userData.email },
      process.env.SECRET
    );
    console.log("userData is", userData);
    const tokenObj = {
      email: userData.email,
      userId: userData._id,
      accountno: userData.accountno,
      token,
      created_at: new Date(),
    };

    await new AuthTokenModel(tokenObj).save();
    await UserModel.update(
      { _id: userData._id },
      { $set: { lastLoginTime: new Date() } }
    );

    req.session.user = {
      _id: userData._id,
      role: roleName,
      countryCode: userData.countryCode,
      phone: userData.phone,
      verified: userData.verified,
      active: userData.active,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      accountno: userData.accountno,
      mobile: userData.mobile,
      image: userData.image ? userData.image : [],
      token,
    };

    res.send({
      status: true,
      message: "Login Successful",
      user: req.session.user,
    });
  } catch (e) {
    console.log("login err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Login",
    });
  }
}
module.exports = mobileLogIn;
