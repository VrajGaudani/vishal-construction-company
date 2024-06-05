const express = require("express");

const NewsLetterRouter = express.Router();
const NewsLetterFunction = require("../controllers/NewsLetterModule");
const { requestAuth, userAuth } = require("../Middleware/userAuth");

NewsLetterRouter.post(
  "/createNewsLetter",
  requestAuth,
  NewsLetterFunction.createNewsLetter
);
NewsLetterRouter.post(
  "/getAllNewsLetter",
  userAuth,
  NewsLetterFunction.getAllNewsLetter
);
NewsLetterRouter.post(
  "/deleteNewsLetter",
  userAuth,
  NewsLetterFunction.deleteNewsLetter
);
NewsLetterRouter.post(
  "/updateNewsLetterStatus",
  userAuth,
  NewsLetterFunction.updateNewsLetterStatus
);

module.exports = NewsLetterRouter;
