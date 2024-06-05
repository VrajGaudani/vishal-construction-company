const createPropertyRequest = require("./createPropertyModule");
const deletePropertyImageRequest = require("./deletePropertyImage");
const createExteriorImage = require("./exteriorImageModule");
const getPropertyList = require("./getPropertyListModule");
const getUserIdPropertyList = require("./getUserPropertyListModule");
const {
  getAllPropertyForAdmin,
  getAllProperty,
  getHomeAllProperty,
  propertyDetail,
  deleteProperty,
  getPropertyLatLong,
  getSearchTerms,
  getSearchMinMax,
  getPropertyByType,
} = require("./propertyCommonHelper");
const getSearchPropertyList = require("./searchPropertyModule");
const updatePrice = require("./updatePriceModule");
const updatePropertyRequest = require("./updatePropertyModule");
const updatePropertyStatus = require("./updatePropertyStatusModule");

module.exports = {
  createPropertyRequest,
  updatePropertyRequest,
  deleteProperty,
  deletePropertyImageRequest,
  propertyDetail,
  getAllPropertyForAdmin,
  getAllProperty,
  getHomeAllProperty,
  getPropertyList,
  updatePropertyStatus,
  createExteriorImage,
  getUserIdPropertyList,
  updatePrice,
  getSearchPropertyList,
  getSearchTerms,
  getPropertyLatLong,
  getSearchMinMax,
  getPropertyByType,
};
