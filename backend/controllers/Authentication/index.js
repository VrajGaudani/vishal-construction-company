const {signUp} = require("./signup");
const logIn = require("./login");
const mobileLogIn = require("./mobileLogin");
const forgotPassword = require("./forgotPassword");
const verification = require("./verification");
const setNewPassword = require("./setNewPassword");
const getAuthToken = require("./getAuthToken");
const logOut = require("./logout");
const resetPassword = require("./resetPassword");

module.exports = {
  signUp,
  logIn,
  mobileLogIn,
  forgotPassword,
  verification,
  setNewPassword,
  getAuthToken,
  logOut,
  resetPassword,
};
