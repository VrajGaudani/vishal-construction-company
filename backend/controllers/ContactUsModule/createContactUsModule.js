const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");

const moduleSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

const SendMessage = require("../../Helper/sendSms");
const { AddressModel, ContactUsModel } = require("../../models");

const siteMobile = async () => {
  let result = await AddressModel.findOne({ active: true });
  console.log("result is", result);
  if (result) {
    return result.mobile;
  } else {
    return 9802953333;
  }
};
const sendMessageToClient = async (bodyData) => {
  let mobile = await siteMobile();
  let clientMessage = "Hello " + bodyData.name + ", \n";
  let clientMobile = bodyData.mobile;
  clientMessage +=
    "Your Message submitted on Vishal Construction Company. We will get back to you at the earliest. For any query Call " +
    mobile +
    ". Regards, Vishal Construction Company VISHCC \n";
  console.log("clientMessage is", clientMessage);
  await SendMessage({
    senderID: "VCCFLT",
    templateID: "1207163549241970196",
    mobile: clientMobile,
    message: clientMessage,
  });
};
const sendMessageToAdmin = async (bodyData) => {
  let mobile = await siteMobile();
  let message = "Hello Vishal Properties, \n";
  message +=
    "A VCC User " +
    bodyData.name +
    ", want to contact. Subject: " +
    bodyData.subject +
    " Name : " +
    bodyData.name +
    " Mobile : " +
    bodyData.mobile +
    " Email : " +
    bodyData.email +
    " Message: " +
    bodyData.message +
    " Thanks VISHCC";
  console.log("message is", message);
  await SendMessage({
    senderID: "VCCFLT",
    templateID: "1207163549238877518",
    mobile,
    message,
  });
};

async function createContactUs(req, res) {
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
    let bodyData = _.pick(req.body, [
      "name",
      "email",
      "mobile",
      "subject",
      "message",
    ]);
    let findData = await ContactUsModel.findOne({ mobile: bodyData.mobile });

    // if (findData) {
    //     // if data found check
    //     throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateModule: true, statusCode: 401 };
    // }

    let saveModule = await new ContactUsModel(bodyData).save();
    if (saveModule) {
      await sendMessageToAdmin(bodyData);
      await sendMessageToClient(bodyData);
    }
    console.log("saveModule is", saveModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE,
    });
  } catch (e) {
    console.log("saveModule err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in saveModule",
    });
  }
}

module.exports = createContactUs;
