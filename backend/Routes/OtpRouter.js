const express = require("express");

const OtpRouter = express.Router();

const { createOTP, verifyOTP } = require("../controllers/OtpModule");
const { requestAuth } = require("../Middleware/userAuth");

OtpRouter.post("/createOTP", requestAuth, createOTP);
OtpRouter.post("/verifyOTP", requestAuth, verifyOTP);
module.exports = OtpRouter;
