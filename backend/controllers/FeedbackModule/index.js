const createFeedbackRequest = require("./createFeedbackModule");
const deleteFeedbackData = require("./deleteFeedbackModule");
const getFeedbackList = require("./getFeedbackListModule");
const getFeedbackForHomeModule = require("./getFeedbackForHomeModule");
const getFeedbackDetails = require("./getFeedbackDetailsModule");
const updateFeedbackRequest = require("./updateFeedbackModule");
const updateFeedbackStatus = require("./updateFeedbackStatusModule");

module.exports = {
  createFeedbackRequest,
  deleteFeedbackData,
  getFeedbackDetails,
  getFeedbackForHomeModule,
  getFeedbackList,
  updateFeedbackRequest,
  updateFeedbackStatus,
};
