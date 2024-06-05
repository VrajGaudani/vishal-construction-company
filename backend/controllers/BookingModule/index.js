const createBooking = require("./createBookingModule");
const getBookingList = require("./getBookingListModule");
const getFeedbackDetails = require("./getFeedbackDetailsModule");
const getFeedbackForHome = require("./getFeedbackForHomeModule");
const updateFeedbackRequest = require("./updateFeedbackModule");
const updateFeedbackStatus = require("./updateFeedbackStatusModule");
module.exports = {
  createBooking,
  getBookingList,
  getFeedbackDetails,
  getFeedbackForHome,
  updateFeedbackRequest,
  updateFeedbackStatus,
};
