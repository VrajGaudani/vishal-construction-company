const express = require("express");
const AuthRouter = express.Router();

const { userAuth } = require("../Middleware/userAuth");
const {
  signUp,
  logIn,
  mobileLogIn,
  forgotPassword,
  verification,
  setNewPassword,
  getAuthToken,
  logOut,
  resetPassword,
} = require("../controllers/Authentication");

//   Authentication
AuthRouter.post("/signup", signUp);
AuthRouter.post("/login", logIn);
AuthRouter.post("/mobileLogin", mobileLogIn);
AuthRouter.post("/forgotPassword", forgotPassword);
AuthRouter.post("/verification", verification);
AuthRouter.post("/setNewPassword", setNewPassword);
AuthRouter.get("/getAuthToken", getAuthToken);
AuthRouter.get("/logout", logOut);
AuthRouter.get("/resetPassword", userAuth, resetPassword);

module.exports = AuthRouter;
