const _ = require("lodash");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const errorResponseHelper = require("../../Helper/errorResponse");
const { TeamModel } = require("../../models");

function getTeam(Director) {
  async function Team(req, res) {
    try {
      let findData = await TeamModel.find({ isDirector: Director }).sort({
        _id: -1,
      });
      let obj = {
        total: findData.length,
        list: findData,
      };
      res.send({ status: true, message: "", data: obj });
    } catch (e) {
      console.log("Getting list err", e);
      await errorResponseHelper({
        res,
        error: e,
        defaultMessage: "Error in Getting list",
      });
    }
  }
  return Team;
}

module.exports = getTeam;
