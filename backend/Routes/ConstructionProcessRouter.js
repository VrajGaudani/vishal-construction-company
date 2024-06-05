const express = require("express");
const fs = require("fs");
const ConstructionProcessRouter = express.Router();

const path = require("path");
const multer = require("multer");
const { userAuth, requestAuth } = require("../Middleware/userAuth");

const {
  createConstructionProcess,
  updateConstructionProcess,
  getAllConstructionProcess,
  getAllActiveConstructionProcess,
  deleteConstructionProcess,
  updateConstructionProcessStatus,
  getConstructionProcess,
} = require("../controllers/ConstructionProcessModule");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/ConstructionProcess";
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
    name: "image",
    maxCount: 1,
  },
];

ConstructionProcessRouter.post(
  "/createConstructionProcess",
  userAuth,
  upload.fields(pageMedia),
  createConstructionProcess
);
ConstructionProcessRouter.post(
  "/updateConstructionProcess",
  userAuth,
  upload.fields(pageMedia),
  updateConstructionProcess
);
ConstructionProcessRouter.post(
  "/getConstructionProcessDetail",
  userAuth,
  getConstructionProcess
);
ConstructionProcessRouter.post(
  "/getAllConstructionProcess",
  userAuth,
  getAllConstructionProcess
);
ConstructionProcessRouter.post(
  "/getAllActiveConstructionProcess",
  requestAuth,
  getAllActiveConstructionProcess
);
ConstructionProcessRouter.post(
  "/deleteConstructionProcess",
  userAuth,
  deleteConstructionProcess
);
ConstructionProcessRouter.post(
  "/updateConstructionProcessStatus",
  userAuth,
  updateConstructionProcessStatus
);
module.exports = ConstructionProcessRouter;
