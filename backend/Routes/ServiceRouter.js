const express = require("express");
const ServiceRouter = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { requestAuth } = require("../Middleware/userAuth");
const {
  createServices,
  getServicesList,
  updateServices,
  updateServicesStatus,
  createServicesEnquiry,
  updateServicesEnquiryStatus,
  deleteServiceEnquiry,
  getServiceEnquiry,
  getServicesEnquiryList,
} = require("../controllers/ServicesModule");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/services";
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

ServiceRouter.post("/createServices", upload.array("services"), createServices);
ServiceRouter.post("/getServicesList", getServicesList);
ServiceRouter.post("/updateServices", upload.array("services"), updateServices);
ServiceRouter.post("/updateServicesStatus", updateServicesStatus);

ServiceRouter.post(
  "/createServicesEnquiry",
  requestAuth,
  upload.array("image"),
  createServicesEnquiry
);
ServiceRouter.post("/getServicesEnquiry", requestAuth, getServiceEnquiry);
ServiceRouter.post("/deleteServicesEnquiry", requestAuth, deleteServiceEnquiry);
ServiceRouter.post(
  "/getServicesEnquiryList",
  requestAuth,
  getServicesEnquiryList
);
ServiceRouter.post(
  "/updateServicesEnquiryStatus",
  requestAuth,
  updateServicesEnquiryStatus
);

module.exports = ServiceRouter;
