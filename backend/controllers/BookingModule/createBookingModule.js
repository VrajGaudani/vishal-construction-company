const _ = require("lodash");
const Joi = require("joi");
const path = require("path");
Joi.objectId = require("joi-objectid")(Joi);
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const sendSupplierMailHelper = require("../../Helper/sendSupplierMailHelper");
const SendMessage = require("../../Helper/sendSms");
const { AddressModel, PropertyModel, BookingModel } = require("../../models");

const moduleSchema = Joi.object({
  propertyId: Joi.string().trim().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.number().required(),
  panCard: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  pinCode: Joi.number().required(),
  bookingAmount: Joi.number().required(),
  flatNumber: Joi.string().required(),
  userId: Joi.string().trim().required(),
  tandc: Joi.boolean().required().allow(true),
});

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
  let clientMessage = "Hello " + bodyData.name + ", \n";
  let clientMobile = bodyData.mobile;
  let mobile = await siteMobile(Models);
  clientMessage +=
    "Your Booking Request Received. We will get back to you at the earliest For any query Call " +
    mobile +
    " \n";
  clientMessage += "Regards, \n";
  clientMessage += "Vishal Construction Company \n";
  clientMessage += "VCCFLT";

  console.log("clientMessage is", clientMessage);
  await SendMessage({
    senderID: "VCCFLT",
    templateID: "1207163679254175639",
    mobile: clientMobile,
    message: clientMessage,
  });
};

const sendMessageToAdmin = async (bodyData) => {
  let mobile = await siteMobile();
  let PropertyData = await getPropertyDetails(bodyData.propertyId);
  console.log("PropertyData in sendMessage is", PropertyData);
  let message = "Hello Vishal Properties, \n";
  message +=
    bodyData.name +
    " Booked a FlatNo. " +
    bodyData.flatNumber +
    " of  " +
    PropertyData
      ? PropertyData.pType
      : "" + "  property named as  " + PropertyData
      ? PropertyData.nameOfProject
      : "" + "  with a Amount of Rs.  " + bodyData.bookingAmount + ". \n";
  message += " Please call back (Mobile:-  " + bodyData.mobile + " )  \n";
  message += "Email:  " + bodyData.email + " , \n";
  message += "Pan Number:  " + bodyData.panCard + ", \n";
  message += "City:  " + bodyData.city + ", \n";
  message += "State:  " + bodyData.state + " , \n";
  message += "PinNumber:  " + bodyData.pinCode + ", \n";
  message += "Country:  " + bodyData.country + " \n";
  message += "Thanks VISHCC";
  //let message = 'Hello, Vishal Propertie&nbsp; A New Request For Site Visit&nbsp;Name : ' + bodyData.name + '&nbsp;Mobile : ' + bodyData.phone + '&nbsp;Email : ' + bodyData.email + '&nbsp;Time ' + bodyData.time + 'Message By:- Dzone india.&nbsp;Thanks';
  console.log("message is", message);
  await SendMessage({
    senderID: "VISHCC",
    templateID: "1207163912526193433",
    mobile: 9802953333,
    message,
  });
};

async function createBooking(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    const validateData = moduleSchema.validate(req.body);
    if (validateData.error) {
      throw {
        status: false,
        error: validateData,
        message: CONSTANTSMESSAGE.INVALID_DATA,
      };
    }

    // pick data from req.body

    let bodyData = req.body;

    let saveModule = await new BookingModel(bodyData).save();
    console.log("saveModule is", saveModule);
    if (saveModule) {
      await sendMessageToAdmin(bodyData);
      await sendMessageToClient(bodyData);
      await sendBookingMail(bodyData);
    }
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

async function getPropertyDetails(propertyId) {
  try {
    let result = await PropertyModel.findOne({ _id: propertyId }).lean();
    return result;
  } catch (error) {
    return {};
  }
}

async function sendBookingMail(data) {
  try {
    let filePath = path.join(__dirname, "../../Template/booknow.html");
    let PropertyData = await getPropertyDetails(data.propertyId);
    let replacements = {
      name: `${_.capitalize(data.name)}`,
      project: PropertyData ? PropertyData.nameOfProject : "",
      propertyCode: PropertyData ? PropertyData.propertyCode : "",
      mobile: data.mobile,
      email: data.email,
      panCard: data.panCard,
      propertyType: PropertyData ? PropertyData.pType : "",
      country: data.country,
      state: data.state,
      city: data.city,
      pinCode: data.pinCode,
      bookingAmount: data.bookingAmount,
      flatNumber: data.flatNumber,
    };

    //let info = await prepareTemplateAndMailHelper({ filePath, replacements, to: data.email, subject: "New Supplier Request For VCC" });
    const attachments = "";
    const info = await sendSupplierMailHelper({
      filePath,
      replacements,
      to: "info@vishalconstructioncompany.com",
      subject: "New Booking from VCC",
      attachments,
      from: data.email,
    });
    return info;
  } catch (e) {
    console.log("error", e);
  }
}
module.exports = createBooking;
