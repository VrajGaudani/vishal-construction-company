const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const { SliderModel } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().required(),
});

async function deleteSlider(req, res) {
  try {
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Slider from Database
    let deleteData = await SliderModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "Slider Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Slider not found" });
    }
  } catch (e) {
    console.log("createSliderHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}
module.exports = deleteSlider;
