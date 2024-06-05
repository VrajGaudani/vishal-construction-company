const express = require("express");

const ReviewRouter = express.Router();
const { requestAuth, userAuth } = require("../Middleware/userAuth");
const {
  createReviewRequest,
  getReviewList,
  updateReviewStatus,
} = require("../controllers/ReviewModule");

ReviewRouter.post("/createReviewRequest", requestAuth, createReviewRequest);
ReviewRouter.post("/getReviewRequest", userAuth, getReviewList);
ReviewRouter.post("/updateReviewStatusRequest", userAuth, updateReviewStatus);

module.exports = ReviewRouter;
