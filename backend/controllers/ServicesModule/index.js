const createServicesEnquiry = require("./createServicesEnquiryModule");
const createServices = require("./createServicesModule");
const deleteServiceEnquiry = require("./deleteServicesEnquiryModule");
const getServicesEnquiryList = require("./getServicesEnquiryListModule");
const getServiceEnquiry = require("./getServicesEnquiryModule");
const getServicesList = require("./getServicesListModule");
const updateServicesEnquiryStatus = require("./updateServicesEnquiryStatusModule");
const updateServices = require("./updateServicesModule");
const updateServicesStatus = require("./updateServicesStatusModule");

module.exports = {
  createServices, //
  getServicesList, //
  updateServices, //
  updateServicesStatus, //
  createServicesEnquiry, //
  getServiceEnquiry, //
  deleteServiceEnquiry, //
  getServicesEnquiryList, //
  updateServicesEnquiryStatus, //
};
