const errorResponseHelper = require("../../Helper/errorResponse");
const { AuthTokenModel } = require("../../models");

async function logOut(req, res) {
  try {
    if (!req.session || !req.session.user) {
      return res.send({
        status: true,
        message: "Successfully logout",
        tokenNotFound: true,
      });
    }

    const token = req.session.user.token;
    delete req.session.user;
    const deleteToken = await AuthTokenModel.deleteOne({ token });
    console.log("deleteToken", deleteToken);
    res.send({ status: true, message: "Successfully logout" });
  } catch (e) {
    console.log("logOut err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in LogOut",
    });
  }
}
module.exports = logOut;
