const express = require("express");
const EnquiryRouter = express.Router();

const { requestAuth, userAuth } = require("../Middleware/userAuth");
const {
  createEnquiryRequest,
  getEnquiryList,
  updateEnquiryStatus,
} = require("../controllers/EnquiryModule");

EnquiryRouter.post("/createEnquiryRequest", requestAuth, createEnquiryRequest);
EnquiryRouter.post("/getEnquiryRequest", userAuth, getEnquiryList);
EnquiryRouter.post(
  "/updateEnquiryStatusRequest",
  userAuth,
  updateEnquiryStatus
);

module.exports = EnquiryRouter;
