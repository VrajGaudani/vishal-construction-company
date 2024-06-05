const express = require("express");
const ContactUsRouter = express.Router();

const { requestAuth, userAuth } = require("../Middleware/userAuth");
const {
  createContactUs,
  getContactUsList,
  updateContactUs,
  updateContactUsStatus,
} = require("../controllers/ContactUsModule");

ContactUsRouter.post("/createContactUs", requestAuth, createContactUs);
ContactUsRouter.post("/getContactUsList", userAuth, getContactUsList);
ContactUsRouter.post("/updateContactUs", userAuth, updateContactUs);
ContactUsRouter.post("/updateContactUsStatus", userAuth, updateContactUsStatus);

module.exports = ContactUsRouter;
