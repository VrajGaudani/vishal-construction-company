const express = require("express");

const CareerRouter = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/jobApplication";
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
  createCareer,
  updateCareer,
  getCareer,
  getAllCareer,
  deleteCareer,
  updateCareerStatus,
  applyForJob,
  updateApplicationStatus,
  getAllApplication,
} = require("../controllers/CareersModule");

CareerRouter.post("/createCareer", userAuth, createCareer);
CareerRouter.post("/getCareer", userAuth, getCareer);
// CareerRouter.post('/getCareerDetail', userAuth, getCareerDetail);
CareerRouter.get("/getAllCareer", userAuth, getAllCareer);
CareerRouter.get("/getAllActiveCareer", requestAuth, getAllCareer);
CareerRouter.get("/JobApplications", userAuth, getAllApplication);
CareerRouter.post("/deleteCareer", userAuth, deleteCareer);
CareerRouter.post("/updateCareer", userAuth, updateCareer);
CareerRouter.post("/updateCareerStatus", userAuth, updateCareerStatus);
CareerRouter.post(
    "/updateApplicationStatus",
    userAuth,
    updateApplicationStatus
);
CareerRouter.post(
  "/applyForJob",
  requestAuth,
  upload.array("resume"),
  applyForJob
);

module.exports = CareerRouter;
