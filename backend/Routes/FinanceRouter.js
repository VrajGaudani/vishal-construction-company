const express = require("express");
const FinanceRouter = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const {
  createFinance,
  getFinanceList,
  getFinanceData,
  getFinanceDetail,
  updateFinance,
  updateFinanceStatus,
  deleteFinance,
} = require("../controllers/FinanceModule");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/Finance";
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

const pageMedia = [
  {
    name: "bankImage",
  },
  {
    name: "bannerImage",
    maxCount: 1,
  },
];

const { userAuth, requestAuth } = require("../Middleware/userAuth");
FinanceRouter.post(
  "/createFinance",
  userAuth,
  upload.fields(pageMedia),
  createFinance
);
FinanceRouter.post("/getFinanceList", userAuth, getFinanceList);
FinanceRouter.post("/getFinanceData", requestAuth, getFinanceData);
FinanceRouter.post("/getFinanceDetail", userAuth, getFinanceDetail);
FinanceRouter.post(
  "/updateFinance",
  userAuth,
  upload.fields(pageMedia),
  updateFinance
);
FinanceRouter.post("/updateFinanceStatus", userAuth, updateFinanceStatus);
FinanceRouter.post("/deleteFinanceData", userAuth, deleteFinance);

module.exports = FinanceRouter;
