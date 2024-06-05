const express = require("express");
const fs = require("fs");
const path = require("path");
const AboutPageRouter = express.Router();
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/AboutPage";
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

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  createAboutPageData,
  getAboutPageList,
  getAboutPageData,
  getAboutPageDetail,
  updateAboutPage,
  updateAboutPageStatus,
  deleteAboutPageData,
} = require("../controllers/AboutPageModule");

AboutPageRouter.post(
  "/createAboutPage",
  userAuth,
  upload.array("image"),
  createAboutPageData
);
AboutPageRouter.get("/getAboutPageList", userAuth, getAboutPageList);
AboutPageRouter.get("/getAboutPageData", requestAuth, getAboutPageData);
AboutPageRouter.post("/getAboutPageDetail", userAuth, getAboutPageDetail);
AboutPageRouter.post(
  "/updateAboutPage",
  userAuth,
  upload.array("image"),
  updateAboutPage
);
AboutPageRouter.post("/updateAboutPageStatus", userAuth, updateAboutPageStatus);
AboutPageRouter.post("/deleteAboutPageData", userAuth, deleteAboutPageData);

module.exports = AboutPageRouter;
