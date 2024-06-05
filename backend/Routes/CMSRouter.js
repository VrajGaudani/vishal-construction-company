const express = require("express");
const fs = require("fs");
const CMSRouter = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/cms";
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
    // req.body.imageFileName = (file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({ storage: storage });
const path = require("path");
const pageMedia = [{
    name: 'image'
}];
const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  createCMS,
  getCMSList,
  getCMS,
  deleteCMS,
  updateCMS,
  updateCMSStatus,
  getCMSPages,
} = require("../controllers/CMSModule");

CMSRouter.post("/createCMS", userAuth, upload.fields(pageMedia), createCMS);
CMSRouter.post("/getCMSList", userAuth, getCMSList);
CMSRouter.post("/getCMSDetail", userAuth, getCMS);
CMSRouter.post("/getDetailData", requestAuth, getCMS);
CMSRouter.post("/deleteCMS", userAuth, deleteCMS);
CMSRouter.post("/getLocationPages", requestAuth, getCMSPages('Location'));
CMSRouter.post("/getBottomPages", requestAuth, getCMSPages('Bottom'));
CMSRouter.post("/updateCMS", userAuth, upload.fields(pageMedia), updateCMS);
CMSRouter.post("/updateCMSStatus", userAuth, updateCMSStatus);

module.exports = CMSRouter;
