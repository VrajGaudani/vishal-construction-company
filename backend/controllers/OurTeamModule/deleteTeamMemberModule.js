const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const errorResponseHelper = require("../../Helper/errorResponse");
const { TeamModel } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().required(),
});

async function deleteTeam(req, res) {
  try {
    let validateData = schema.validate(req.body);
    if (validateData.error) {
      throw { status: false, error: validateData, message: "Invalid data" };
    }

    // Getting Team from Database
    let deleteData = await TeamModel.remove({ _id: req.body._id });
    console.log("deleteData is", deleteData);
    if (deleteData) {
      // if data found check verified or not
      res.send({ status: true, message: "Team Member Deleted Successfully" });
    } else {
      res.send({ status: true, message: "Team Member not found" });
    }
  } catch (e) {
    console.log("createTeamHelper err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in SignUp",
    });
  }
}

module.exports = deleteTeam;
