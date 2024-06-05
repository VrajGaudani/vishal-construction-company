const express = require("express");

const HomeRouter = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/home";
    try {
      if (!fs.existsSync(fpathId)) {
        fs.mkdirSync(fpathId, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
    cb(null, fpathId);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });
// let bannerUpload = multer({ storage: storage });

const homeFunction = require("../controllers/HomeModule");
// let { dashBoardFunction } = require("./Routes");
const { userAuth, requestAuth } = require("../Middleware/userAuth");

const pageMedia = [
  {
    name: "image",
  },
  {
    name: "banner",
  },
  {
    name: "video",
  },
];
const serviceMedia = [
  {
    name: "image",
  },
  {
    name: "banner",
  },
];
const imageVideo = [
  {
    name: "image",
  },
  {
    name: "video",
  },
];

// About Section
HomeRouter.post(
  "/createAboutSection",
  userAuth,
  upload.array("aboutImages"),
  homeFunction.createAboutSection
);
HomeRouter.post(
  "/updateAboutSection",
  userAuth,
  upload.array("aboutImages"),
  homeFunction.updateAboutSection
);
HomeRouter.post("/homeAbout", userAuth, homeFunction.getHomeAbout);


// Moving Banner
HomeRouter.post(
  "/createMovingBanner",
  userAuth,
  // upload.array("backgroundImage"),
  homeFunction.createMovingBanner
);
HomeRouter.post(
  "/updateMovingBanner",
  userAuth,
  // upload.array("backgroundImage"),
  homeFunction.updateMovingBanner
);
HomeRouter.post("/movingBanner", userAuth, homeFunction.getHomeMovingBanner);

// DealingIn
HomeRouter.post(
  "/createDealingIn",
  userAuth,
  upload.fields(imageVideo),
  homeFunction.createDealingIn
);
HomeRouter.post(
  "/updateDealingIn",
  userAuth,
  upload.fields(imageVideo),
  homeFunction.updateDealingIn
);
HomeRouter.post("/getDealingList", userAuth, homeFunction.getDealingList);
HomeRouter.post(
  "/getDealingInDetails",
  userAuth,
  homeFunction.getDealingInDetails
);
HomeRouter.post("/deleteDealingIn", userAuth, homeFunction.deleteDealingIn);

HomeRouter.post(
  "/updateDealingInStatusHelper",
  userAuth,
  homeFunction.updateDealingInStatus
);

// Dealing In Item 
HomeRouter.post(
  "/createDealingInItem",
  userAuth,
  upload.fields(pageMedia),
  homeFunction.createDealingInItem
);

HomeRouter.post(
  "/updateDealingInItem",
  userAuth,
  upload.fields(pageMedia),
  homeFunction.updateDealingInItem
);
HomeRouter.post(
  "/updateDealingInItemStatusHelper",
  userAuth,
  homeFunction.updateDealingInItemStatus
);

HomeRouter.post(
  "/getDealingItemList",
  userAuth,
  homeFunction.getDealingItemList
);
HomeRouter.post(
  "/getDealingInItemDetails",
  userAuth,
  homeFunction.getDealingInItemDetails
);
HomeRouter.post("/deleteDealingItem", userAuth, homeFunction.deleteDealingItem);

// Services 
HomeRouter.post("/createService", userAuth, homeFunction.createService);
HomeRouter.post("/getServiceList", userAuth, homeFunction.getServiceList);
HomeRouter.post("/getServiceDetail", userAuth, homeFunction.getServiceDetail);
HomeRouter.post("/updateService", userAuth, homeFunction.updateService);
HomeRouter.post("/deleteService", userAuth, homeFunction.deleteService);
HomeRouter.post(
  "/updateServiceStatusHelper",
  userAuth,
  homeFunction.updateServiceStatus
);

// Service Item
HomeRouter.post(
  "/createServiceItem",
  userAuth,
  upload.fields(serviceMedia),
  homeFunction.createServiceItem
);
HomeRouter.post(
  "/getServiceItemList",
  userAuth,
  homeFunction.getServiceItemList
);
HomeRouter.post(
  "/getServiceItem",
  userAuth,
  homeFunction.getServiceItemDetails
);
HomeRouter.post("/deleteServiceItem", userAuth, homeFunction.deleteServiceItem);
HomeRouter.post(
  "/updateServiceItem",
  userAuth,
  upload.fields(serviceMedia),
  homeFunction.updateServiceItem
);
HomeRouter.post(
  "/updateServiceItemStatus",
  userAuth,
  homeFunction.updateServiceItemStatus
);

// Dashboard
// HomeRouter.post("/dashboard", userAuth, dashBoardFunction);

//Api For Client Side
HomeRouter.post("/getHomeAbout", requestAuth, homeFunction.getHomeAbout);
HomeRouter.post(
  "/getMovingBanner",
  requestAuth,
  homeFunction.getHomeMovingBanner
);
HomeRouter.post("/getDealingIn", requestAuth, homeFunction.getDealingInForHome);
HomeRouter.post(
  "/getDealingInItem",
  requestAuth,
  homeFunction.getDealingInItemDetails
);
HomeRouter.post("/getService", requestAuth, homeFunction.getServiceForHome);
HomeRouter.post(
  "/getServiceItemDetails",
  requestAuth,
  homeFunction.getServiceItemDetails
);

//Footer Address
HomeRouter.post(
  "/createVishalAddress",
  userAuth,
  homeFunction.createVishalAddress
);
HomeRouter.post(
  "/updateVishalAddress",
  userAuth,
  homeFunction.updateVishalAddress
);
HomeRouter.post("/getVishalAddress", userAuth, homeFunction.getVishalAddress);
HomeRouter.post(
  "/getFooterAddress",
  requestAuth,
  homeFunction.getVishalAddress
);

//Footer Social Media Links
HomeRouter.post("/createSocialMedia", userAuth, homeFunction.createSocialMedia);
HomeRouter.post("/updateSocialMedia", userAuth, homeFunction.updateSocialMedia);
HomeRouter.post("/getSocialMedia", userAuth, homeFunction.getSocialMedia);
HomeRouter.post(
  "/getFooterSocialMedia",
  requestAuth,
  homeFunction.getSocialMedia
);

module.exports = HomeRouter;
