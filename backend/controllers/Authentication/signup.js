const _ = require("lodash");
const Joi = require("joi");
const path = require("path");
const bcrypt = require("bcryptjs");
const createTokenFunction = require("../../Helper/createUniqueToken");
const prepareTemplateAndMailHelper = require("../../Helper/prepareTemplateAndMail");
const errorResponseHelper = require("../../Helper/errorResponse");
const { UserModel } = require("../../models/index");

const signUpSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  mobile: Joi.number().required(),
  countryCode: Joi.number(),
  userRole: Joi.string().required(),
});

async function prepareTemplateSendMail(data) {
  try {
    const filePath = path.join(
      __dirname,
      "../../Template/userAuthentication.html"
    );
    const replacements = {
      name: `${_.capitalize(data.firstName)} ${data.lastName}`,
      username: data.email,
      authenticationLink: `${
        process.env.SERVER_URL || process.env.APP_URL
      }/verification?token=${data.verificationToken}`,
    };
    const info = await prepareTemplateAndMailHelper({
      filePath,
      replacements,
      to: data.email,
      subject: "Authentication",
    });
    return info;
  } catch (e) {
    console.log("error", e);
  }
}

// prepareTemplateSendMail({ firstName: "tek", lastName: "thapa", email: "tekbahadur1996@gmail.com", verificationToken: "THIS_IS_TOKEN"}).then(x => {
//     console.log('then',x);
// });

async function signUp(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi

    let validateData = signUpSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let userData = _.pick(req.body, [
      "firstName",
      "lastName",
      "email",
      "password",
      "mobile",
      "countryCode",
      "userRole",
    ]);

    // setting email to lowercase
    userData.email = String(userData.email).trim().toLowerCase();

    // searching email or mobile already exists or not
    const findData = await UserModel.findOne({
      $or: [{ email: userData.email }, { mobile: userData.mobile }],
    });

    if (findData) {
      // if data found check verified or not
      if (!findData.verified) {
        // user is not verified then send verification email again
        prepareTemplateSendMail(findData);
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
      if (!findData.active) {
        throw {
          status: false,
          error: true,
          message: "Your account has been disabled. Please contact admin",
          adminDisable: true,
          statusCode: 401,
        };
      }

      throw {
        status: false,
        error: true,
        message: "Account already exists",
        duplicateAccount: true,
        statusCode: 401,
      };
    }

    // creating unique token
    // const hash = await createTokenFunction(userData.email);
    const verificationToken = await crypto.randomBytes(20).toString('hex');
    userData.verificationToken = verificationToken;
    userData.password = bcrypt.hashSync(userData.password, 10);
    let savedUser = await new UserModel(userData).save();

    // now send mail
    prepareTemplateSendMail(savedUser);
    // const authenticationLink = `${
    //   process.env.SERVER_URL || process.env.APP_URL
    // }/verification?token=${savedUser.verificationToken}`;
    res.send({
      status: true,
      message: "Verification mail has been sent to your registered email",
      mailSent: true,
    });
  } catch (e) {
    console.log("Signup Error err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

module.exports = { signUp, prepareTemplateSendMail };
