const express = require("express");
const CallBackRouter = express.Router();

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  createCallbackRequest,
  updateCallbackStatus,
  getCallbackList,
} = require("../controllers/CallbackModule/index");

CallBackRouter.post(
  "/createCallbackRequest",
  requestAuth,
  createCallbackRequest
);
CallBackRouter.post("/getCallbackList", requestAuth, userAuth, getCallbackList);
CallBackRouter.post("/updateCallbackStatus", userAuth, updateCallbackStatus);

module.exports = CallBackRouter;
