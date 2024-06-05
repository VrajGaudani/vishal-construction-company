const _ = require("lodash");
const Joi = require("joi");
const errorResponseHelper = require("../../Helper/errorResponse");
const CONSTANTSMESSAGE = require("../../Helper/constantsMessage");
const { NewsLetterModel } = require("../../models");

const createNewsLetterSchema = Joi.object({
  email: Joi.string().trim().required(),
  type: Joi.string().trim().required(),
});
const updateNewsLetterStatusSchema = Joi.object({
  _id: Joi.string().trim().required(),
  active: Joi.boolean().required(),
});

async function createNewsLetter(req, res) {
  try {
    let validateData = createNewsLetterSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // pick data from req.body
    let NewsLetterFormData = _.pick(req.body, ["email", "type"]);

    let saveNewsLetter = await new NewsLetterModel(NewsLetterFormData).save();
    console.log("saveNewsLetter is ", saveNewsLetter);
    saveNewsLetter = saveNewsLetter.toObject();

    res.send({
      status: true,
      message: "Subscribed to NewsLetter successfully.",
    });
  } catch (e) {
    console.log("createNewsLetterHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Creating NewsLetter",
    });
  }
}

async function getAllNewsLetter(req, res) {
  try {
    // Getting all NewsLetters from Database
    let findData = await NewsLetterModel.find().sort({ _id: -1 });
    if (findData.length) {
      // if data found check verified or not
      res.send({ status: true, message: "NewsLetters List", data: findData });
    } else {
      res.send({ status: true, message: "No Data found for NewsLetters" });
    }
  } catch (e) {
    console.log("createNewsLetterHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function getActiveNewsLetter(req, res) {
  try {
    // Getting all NewsLetters from Database
    let findData = await NewsLetterModel.findOne({
      active: true,
    }).sort({ _id: -1 });
    if (findData.length) {
      // if data found check verified or not
      res.send({
        status: true,
        message: "NewsLetters For Client",
        data: findData,
      });
    } else {
      res.send({
        status: true,
        message: "No Data found for NewsLetters for client",
      });
    }
  } catch (e) {
    console.log("createNewsLetterHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function updateNewsLetterStatus(req, res) {
  try {
    let validateData = updateNewsLetterStatusSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    let bodyData = _.pick(req.body, ["active", "_id"]);
    let setData = {
      active: bodyData.active,
    };
    let updateModule = await NewsLetterModel.findOneAndUpdate(
      { _id: bodyData._id },
      { $set: setData }
    );
    console.log("updateModule is", updateModule);
    res.send({
      status: true,
      message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS,
    });
  } catch (e) {
    console.log("createNewsLetterHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

async function deleteNewsLetter(req, res) {
  try {
    let validateData = getNewsLetterSchema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting NewsLetter from Database
    let deleteData = await NewsLetterModel.remove({
      _id: req.body._id,
    });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "NewsLetter Deleted Successfully" });
    } else {
      res.send({ status: true, message: "NewsLetter not found" });
    }
  } catch (e) {
    console.log("createNewsLetterHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

module.exports = {
  createNewsLetter,
  getAllNewsLetter,
  updateNewsLetterStatus,
  deleteNewsLetter,
  getActiveNewsLetter,
};
