const express = require("express");
const FeedbackRouter = express.Router();

const multer = require("multer");
const fs = require("fs");
const path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/feedback";
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
      name: "iconImage",
      maxCount: 1,
    },
    {
      name: "image",
      maxCount: 3,
    },
  ];

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  createFeedbackRequest,
  deleteFeedbackData,
  getFeedbackDetails,
  getFeedbackForHomeModule,
  getFeedbackList,
  updateFeedbackRequest,
  updateFeedbackStatus,
} = require("../controllers/FeedbackModule");

FeedbackRouter.post(
  "/createFeedbackRequest",
  requestAuth,upload.fields(pageMedia),
  createFeedbackRequest
);
FeedbackRouter.post("/deleteFeedbackData", userAuth, deleteFeedbackData);
FeedbackRouter.post("/getFeedbackDetails", userAuth, getFeedbackDetails);
FeedbackRouter.post(
  "/getFeedbackForHomeModule",
  userAuth,
  getFeedbackForHomeModule
);
FeedbackRouter.post("/getFeedbackList", userAuth, getFeedbackList);
FeedbackRouter.post("/updateFeedbackRequest", userAuth, updateFeedbackRequest);
FeedbackRouter.post("/updateFeedbackStatus", userAuth, updateFeedbackStatus);

module.exports = FeedbackRouter;
