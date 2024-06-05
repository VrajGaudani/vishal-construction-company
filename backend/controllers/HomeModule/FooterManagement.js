const _ = require("lodash");
const Joi = require("joi");
const path = require("path");
const bcrypt = require("bcryptjs");
const createTokenFunction = require("../../Helper/createUniqueToken");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { nanoid } = require("nanoid");
const { AddressModel, SocialMediaModel } = require("../../models");

// Create Schema

const createVishalAddressSchema = Joi.object({
  address: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().required(),
  pinCode: Joi.number(),
  mobile: Joi.string(),
  email: Joi.string(),
  timing: Joi.string(),
});

const createSocialMediaSchema = Joi.object({
  facebook: Joi.string().trim().required(),
  twitter: Joi.string().trim().required(),
  instagram: Joi.string().trim().required(),
  linkedin: Joi.string().trim().required(),
  youtube: Joi.string().trim().required(),
});

// Update Schema

const updateAddressSchema = Joi.object({
  _id: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().required(),
  pinCode: Joi.number(),
  mobile: Joi.string(),
  email: Joi.string(),
  timing: Joi.string(),
});
const updateSocialMediaSchema = Joi.object({
  _id: Joi.string().trim().required(),
  facebook: Joi.string().trim().required(),
  twitter: Joi.string().trim().required(),
  instagram: Joi.string().trim().required(),
  linkedin: Joi.string().trim().required(),
  youtube: Joi.string().trim().required(),
});

async function createVishalAddress(req, res) {
  try {
    let validateData = createVishalAddressSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let addressFormData = _.pick(req.body, [
      "address",
      "city",
      "state",
      "pinCode",
      "mobile",
      "email",
      "timing",
    ]);

    let isAddressExist = await AddressModel.find();
    if (isAddressExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveAddress = await new AddressModel(addressFormData).save();
      console.log("saveAddress is ", saveAddress);
      saveAddress = saveAddress.toObject();
      res.send({ status: true, message: "New Address created successfully." });
    }
  } catch (e) {
    console.log("createAddressHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating Address Data",
    });
  }
}

async function updateVishalAddress(req, res) {
  try {
    let validateData = updateAddressSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let bodyData = _.pick(req.body, [
      "_id",
      "address",
      "city",
      "state",
      "pinCode",
      "mobile",
      "email",
      "timming",
    ]);

    let setData = {
      address: bodyData.address,
      city: bodyData.city,
      state: bodyData.state,
      pinCode: bodyData.pinCode,
      mobile: bodyData.mobile,
      email: bodyData.email,
      timming: bodyData.timming,
    };
    let updateModule = await AddressModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    if (updateModule) {
      res.send({ status: true, message: "Address updated successfully." });
    }
  } catch (e) {
    console.log("updateAddressHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Updating Address Data",
    });
  }
}

async function getVishalAddress(req, res) {
  try {
    // Getting Address from Database
    let findData = await AddressModel.find();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({ status: true, message: "Address Data", data: findData[0] });
    } else {
      res.send({ status: true, message: "Address Data not found" });
    }
  } catch (e) {
    console.log("getAddress err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getAddress",
    });
  }
}

// Social Media
async function createSocialMedia(req, res) {
  try {
    let validateData = createSocialMediaSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let socialMediaData = _.pick(req.body, [
      "facebook",
      "twitter",
      "instagram",
      "linkedin",
      "youtube",
    ]);

    let isSocialMediaExist = await SocialMediaModel.find();
    if (isSocialMediaExist.length) {
      res.send({
        status: false,
        message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE,
      });
    } else {
      let saveSocialMedia = await new SocialMediaModel(socialMediaData).save();
      console.log("saveSocialMedia is ", saveSocialMedia);
      saveSocialMedia = saveSocialMedia.toObject();
      res.send({
        status: true,
        message: "New SocialMedia created successfully.",
      });
    }
  } catch (e) {
    console.log("createSocialMediaHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating SocialMedia Data",
    });
  }
}

async function updateSocialMedia(req, res) {
  try {
    let validateData = updateSocialMediaSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let bodyData = _.pick(req.body, [
      "_id",
      "facebook",
      "twitter",
      "instagram",
      "linkedin",
      "youtube",
    ]);

    let setData = {
      facebook: bodyData.facebook,
      twitter: bodyData.twitter,
      instagram: bodyData.instagram,
      linkedin: bodyData.linkedin,
      youtube: bodyData.youtube,
    };
    let updateModule = await SocialMediaModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    if (updateModule) {
      res.send({
        status: true,
        message: "SocialMedia updated successfully.",
      });
    }
  } catch (e) {
    console.log("updateSocialMediaHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Updating SocialMedia Data",
    });
  }
}

async function getSocialMedia(req, res) {
  try {
    // Getting SocialMedia from Database
    let findData = await SocialMediaModel.find();
    console.log("findData is", findData);
    if (findData) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "SocialMedia Data",
        data: findData[0],
      });
    } else {
      res.send({ status: true, message: "SocialMedia Data not found" });
    }
  } catch (e) {
    console.log("getSocialMedia err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in getSocialMedia",
    });
  }
}

module.exports = {
  createVishalAddress,
  updateVishalAddress,
  getVishalAddress,
  createSocialMedia,
  updateSocialMedia,
  getSocialMedia,
};
