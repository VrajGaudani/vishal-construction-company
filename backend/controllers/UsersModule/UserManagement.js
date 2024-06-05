const _ = require("lodash");
const Joi = require("joi");
const path = require("path");
const bcrypt = require("bcryptjs");
const createTokenFunction = require("../../Helper/createUniqueToken");
const prepareTemplateAndMailHelper = require("../../Helper/prepareTemplateAndMail");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { nanoid } = require("nanoid");
const {
  UserModel,
  PropertyModel,
  BookingModel,
  WishListModel,
} = require("../../models");

const createUserSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim(),
  email: Joi.string().email().trim().required(),
  mobile: Joi.number().required(),
  countryCode: Joi.number(),
  userRole: Joi.string().required(),
});
const updateUserSchema = Joi.object({
  id: Joi.string().required(),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim(),
  address: Joi.string().trim(),
  city: Joi.string().trim(),
  state: Joi.string().trim(),
});
const getUserSchema = Joi.object({
  _id: Joi.string().trim().required(),
});
const getUserPropertySchema = Joi.object({
  userId: Joi.string().trim().required(),
});
const addUserWishListPropertySchema = Joi.object({
  userId: Joi.string().trim().required(),
  propertyId: Joi.string().trim().required(),
});
const removeWishListPropertySchema = Joi.object({
  userId: Joi.string().trim().required(),
  propertyId: Joi.string().trim().required(),
});
const updateUserStatusSchema = Joi.object({
  _id: Joi.string().trim().required(),
  active: Joi.number().required(),
});

async function prepareTemplateSendMail(data) {
  try {
    let filePath = path.join(
      __dirname,
      "../../Template/userAuthenticationWithPassword.html"
    );
    let replacements = {
      name: `${_.capitalize(data.firstName)} ${data.lastName}`,
      username: data.email,
      password: data.passwordText,
      authenticationLink: `${
        process.env.SERVER_URL || process.env.APP_URL
      }/verification?token=${data.verificationToken}`,
    };
    let info = await prepareTemplateAndMailHelper({
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

async function createUser(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    let validateData = createUserSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let userData = req.body;

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
    const hash = await createTokenFunction(userData.email);
    userData.verificationToken = hash;
    let passwordText = nanoid(8);
    userData.password = bcrypt.hashSync(passwordText, 10);
    if (req.files.length > 0) userData.image = req.files;

    let saveUser = await new UserModel(userData).save();
    saveUser = saveUser.toObject();
    saveUser.passwordText = passwordText;
    // now send mail
    prepareTemplateSendMail(saveUser);

    res.send({
      status: true,
      message: "Verification mail has been sent to your registered email",
      mailSent: true,
    });
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getAllUser(req, res) {
  try {
    // Getting all Users from Database
    const findData = await UserModel.find().sort({ _id: -1 });
    if (findData.length) {
      // if data found check verified or not
      res.send({ status: true, message: "Users List", data: findData });
    } else {
      res.send({ status: true, message: "No Data found for Users" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getUser(req, res) {
  try {
    const validateData = getUserSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting User from Database
    let findData = await UserModel.findOne({ _id: req.body._id });
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "User Data", data: findData });
    } else {
      res.send({ status: true, message: "User Data not found" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Get User",
    });
  }
}

async function updateUserStatus(req, res) {
  try {
    const validateData = updateUserStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = req.body;
    let setData = {
      active: bodyData.active,
    };
    let updateModule = await UserModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function deleteUser(req, res) {
  try {
    const validateData = getUserSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting User from Database
    let deleteData = await UserModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "User Deleted Successfully" });
    } else {
      res.send({ status: true, message: "User not found" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getUserProperties(req, res) {
  try {
    const validateData = getUserPropertySchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting User from Database
    const Data = await PropertyModel.find({ userId: req.body.userId }).sort({
      _id: -1,
    });
    console.log("Data is", Data);
    if (Data) {
      // if data found check verified or not
      res.send({ status: true, message: "User Properties List", data: Data });
    } else {
      res.send({ status: true, message: "User Properties not found" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getUserBookings(req, res) {
  try {
    let validateData = getUserPropertySchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting User from Database
    let Data = await BookingModel.find({ userId: req.body.userId })
      .sort({ _id: -1 })
      .populate("propertyId");
    let result = [];
    for (let x = 0; x < Data.length; x++) {
      let item = Data[x].toObject();
      let propertyId = item.propertyId._id;
      let imageData = await Models.PImageDB.findOne({ _id: propertyId });
      let mainImage = imageData ? imageData.mainImage : [];
      item.images = mainImage;
      result.push(item);
    }
    console.log("Data is", result);
    if (result) {
      // if data found check verified or not
      res.send({ status: true, message: "User Booking List", data: result });
    } else {
      res.send({ status: true, message: "User Booking not found" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getUserWishList(req, res) {
  try {
    let validateData = getUserPropertySchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting User from Database
    let Data = await WishListModel.find({ userId: req.body.userId })
      .sort({ _id: -1 })
      .populate("propertyId");
    console.log("Data is", Data);
    let result = [];
    for (let x = 0; x < Data.length; x++) {
      let item = Data[x].toObject();
      let propertyId = item.propertyId._id;
      let imageData = await Models.PImageDB.findOne({ propertyId });
      let FeaturesData = await Models.PFeaturesDB.findOne({ propertyId });
      let mainImage = imageData ? imageData.mainImage : [];
      let Features = FeaturesData ? FeaturesData : null;
      item.images = mainImage;
      item.Features = Features;
      result.push(item);
    }
    console.log("Data is", result);
    if (result) {
      // if data found check verified or not
      res.send({ status: true, message: "User Wish List", data: result });
    } else {
      res.send({ status: true, message: "User WishList not found" });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function addToWishList(req, res) {
  try {
    const validateData = addUserWishListPropertySchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let WishListData = {
      propertyId: req.body.propertyId,
      userId: req.body.userId,
    };
    let Data = await new WishListModel(WishListData).save();
    console.log("Data is", Data);
    if (Data) {
      // if data found check verified or not
      res.send({ status: true, message: "User Wish Created.", data: Data });
    } else {
      res.send({
        status: true,
        message: "Error While Creating User WishList",
      });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function removeFromWishList(req, res) {
  try {
    const validateData = removeWishListPropertySchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let query = {
      $and: [{ propertyId: req.body.propertyId }, { userId: req.body.userId }],
    };
    let Data = await WishListModel.remove(query);
    console.log("Data is", Data);
    if (Data) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "Property Removed From User WishList",
        data: Data,
      });
    } else {
      res.send({
        status: true,
        message: "Error While Property Removing From User WishList",
      });
    }
  } catch (e) {
    console.log("createUserHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function updateUser(req, res) {
  try {
    // console.log(req.sessionID)
    // validate data using joi
    let validateData = updateUserSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let userData = req.body;
    setData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      address: userData.address,
      city: userData.city,
      state: userData.state,
    };
    const updateModule = await UserModel.findOneAndUpdate(
      { _id: userData.id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({ status: true, message: "User Profile Updated Successfully." });
  } catch (e) {
    console.log("updateUser err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in user Update",
    });
  }
}
module.exports = {
  prepareTemplateSendMail,
  createUser,
  getAllUser,
  getUser,
  updateUserStatus,
  deleteUser,
  getUserProperties,
  getUserBookings,
  getUserWishList,
  addToWishList,
  removeFromWishList,
  updateUser,
};
