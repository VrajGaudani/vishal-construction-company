const express = require("express");
const SliderRouter = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const {
  createSlider,
  getSliderList,
  updateSlider,
  updateSliderStatus,
  deleteSlider,
  getSlider,
} = require("../controllers/SliderModule");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/slider";
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

const pageMedia = [
  {
    name: "image",
    maxCount: 1,
  },
];
const { userAuth, requestAuth } = require("../Middleware/userAuth");

SliderRouter.post(
  "/createSlider",
  userAuth,
  upload.fields(pageMedia),
  createSlider
);
SliderRouter.post("/getSliderList", userAuth, getSliderList);
SliderRouter.post(
  "/updateSlider",
  userAuth,
  upload.fields(pageMedia),
  updateSlider
);
SliderRouter.post("/updateSliderStatus", userAuth, updateSliderStatus);
SliderRouter.post("/deleteSlider", userAuth, deleteSlider);
SliderRouter.post("/getSliderDetail", userAuth, getSlider);
SliderRouter.post("/getHomeSlider", requestAuth, getSliderList);

module.exports = SliderRouter;
