const express = require("express");

const InvestWithUsRouter = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/InvestWithUs";
    try {
      if (!fs.existsSync(fpathId)) {
        fs.mkdirSync(fpathId, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
    cb(null, fpathId);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({ storage: storage });

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const InvestWithUsFunction = require("../controllers/InvestWithUsModule");

const pageMedia = [
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "bannerImage",
    maxCount: 1,
  },
  {
    name: "whatWeDoImages",
    maxCount: 10,
  },
  {
    name: "howToInvestImages",
    maxCount: 3,
  },
];

InvestWithUsRouter.post(
  "/createInvestWithUs",
  userAuth,
  upload.fields(pageMedia),
  InvestWithUsFunction.createInvestWithUs
);
InvestWithUsRouter.post(
  "/updateInvestWithUs",
  userAuth,
  upload.fields(pageMedia),
  InvestWithUsFunction.updateInvestWithUs
);
InvestWithUsRouter.post(
  "/getInvestWithUsDetail",
  userAuth,
  InvestWithUsFunction.getInvestWithUs
);
InvestWithUsRouter.post(
  "/getAllInvestWithUs",
  userAuth,
  InvestWithUsFunction.getAllInvestWithUs
);
InvestWithUsRouter.post(
  "/getActiveInvestWithUs",
  requestAuth,
  InvestWithUsFunction.getActiveInvestWithUs
);
InvestWithUsRouter.post(
  "/deleteInvestWithUs",
  userAuth,
  InvestWithUsFunction.deleteInvestWithUs
);
InvestWithUsRouter.post(
  "/updateInvestWithUsStatus",
  userAuth,
  InvestWithUsFunction.updateInvestWithUsStatus
);

module.exports = InvestWithUsRouter;
