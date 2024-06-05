// auth middleware, checks token, expire token if token is created before 00:00 UTC,
// sets user's data in req.locals.user
const moment = require("moment");
var jwt = require("jsonwebtoken");
const { AuthTokenModel } = require("../models");

async function userAuth(req, res, next) {
  try {
    const authToken = req.headers.authorization;
    const tokenArr = authToken.split(" ");
    const token = tokenArr[0];
    if (!token) {
      throw {
        status: false,
        error: true,
        auth: false,
        message: "Token is required",
      };
    }
    const userToken = await AuthTokenModel.findOne({ token })
      .populate("userId")
      .lean();
      // console.log(userToken);
    if (!userToken) {
      throw {
        status: false,
        error: true,
        auth: false,
        message: "Invalid token",
      };
    }

    if (
      userToken.created_at &&
      new Date(userToken.created_at) < new Date(moment.utc().startOf("day"))
    ) {
      // token is old delete it
      await AuthTokenModel.deleteOne({ token });
      throw {
        status: false,
        error: true,
        auth: false,
        message: "Token exipred",
        expired: true,
      };
    }

    req.locals = {
      user: userToken,
    };
    // console.log("locals", req.locals);
    next();
  } catch (e) {
    console.log("userAuthMiddleware err", e);
    let err = {
      status: false,
      error: true,
      message: "Error in Auth",
      auth: false,
    };
    if (e.error) err = e;

    return res.send(err);
  }
}

async function requestAuth(req, res, next) {
  try {
    let authToken = req.headers.authorization;

    if (!authToken) {
      throw {
        status: false,
        error: true,
        auth: false,
        message: "Token is required",
      };
    }
    let tokenArr = authToken.split(" ");
    let token = tokenArr[0];
    let decoded;
    console.log("token is", token);
    console.log("process.env.REQUEST_TOKEN is", process.env.REQUEST_TOKEN);

    if (token == process.env.REQUEST_TOKEN) {
      decoded = jwt.verify(token, process.env.SESSION_SECRET);
      console.log(decoded);
    }
    if (decoded == process.env.SECRET) {
      next();
    } else {
      let userToken = await AuthTokenModel.findOne({ token })
        .populate("userId")
        .lean();
      if (!userToken) {
        throw {
          status: false,
          error: true,
          auth: false,
          message: "Invalid token",
        };
      }

      if (
        userToken.created_at &&
        new Date(userToken.created_at) < new Date(moment.utc().startOf("day"))
      ) {
        // token is old delete it
        await AuthTokenModel.deleteOne({ token });
        throw {
          status: false,
          error: true,
          auth: false,
          message: "Token exipred",
          exipred: true,
        };
      }

      req.locals = {
        user: userToken,
      };
      // console.log("locals", req.locals);
      next();
    }
  } catch (error) {
    console.log("Error is", error);
    res.send({
      status: false,
      error: true,
      auth: false,
      message: error.message,
    });
  }
}

module.exports = { userAuth, requestAuth };
