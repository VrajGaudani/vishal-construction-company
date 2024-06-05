const errorResponseHelper = require("../../Helper/errorResponse");

async function getAuthToken(req, res) {
  try {
    res.send({ status: true, user: req.session.user });
  } catch (e) {
    console.log("getAuth err", e);
    await errorResponseHelper({
      res,
      error: e,
      defaultMessage: "Error in Auth",
    });
  }
}
module.exports = getAuthToken;
