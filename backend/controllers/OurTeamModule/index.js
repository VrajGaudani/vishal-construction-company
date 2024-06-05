const createTeam = require("./createTeamMemberModule");
const deleteTeam = require("./deleteTeamMemberModule");
const getTeam = require("./getTeamDataModule");
const getTeamList = require("./getTeamListModule");
const getTeamMember = require("./getTeamMemberDetailModule");
const updateTeam = require("./updateTeamMemberModule");
const updateTeamStatus = require("./updateTeamMemberStatusModule");

module.exports = {
  createTeam,
  deleteTeam,
  getTeam,
  getTeamList,
  updateTeam,
  updateTeamStatus,
  getTeamMember,
};
