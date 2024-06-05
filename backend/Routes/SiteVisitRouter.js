const express = require("express");

const SiteVisitRouter = express.Router();

const { requestAuth, userAuth } = require("../Middleware/userAuth");
const {
  createSiteVisitRequest,
  getSiteVisitList,
  updateSiteVisitStatus,
} = require("../controllers/SiteVisitModule");

SiteVisitRouter.post(
  "/createSiteVisitRequest",
  requestAuth,
  createSiteVisitRequest
);
SiteVisitRouter.post("/getSiteVisitRequest", userAuth, getSiteVisitList);
SiteVisitRouter.post(
  "/updateSiteVisitStatusRequest",
  userAuth,
  updateSiteVisitStatus
);

module.exports = SiteVisitRouter;
