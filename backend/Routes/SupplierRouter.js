const express = require("express");

const SupplierRouter = express.Router();
const fs = require("fs");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/suppliers";
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
const path = require("path");

const { userAuth, requestAuth } = require("../Middleware/userAuth");
const {
  getSupplierList,
  createSupplier,
  getSupplierDetail,
  updateSupplier,
  updateSupplierStatus,
  deleteSupplierModule,
} = require("../controllers/SupplierModule");

SupplierRouter.post(
  "/createSupplier",
  requestAuth,
  upload.array("file"),
  createSupplier
);
SupplierRouter.post("/getSupplierList", userAuth, getSupplierList);
SupplierRouter.post("/getSupplierDetail", userAuth, getSupplierDetail);
SupplierRouter.post(
  "/updateSupplier",
  userAuth,
  upload.array("file"),
  updateSupplier
);
SupplierRouter.post("/updateSupplierStatus", userAuth, updateSupplierStatus);
SupplierRouter.post("/deleteSupplier", userAuth, deleteSupplierModule);

module.exports = SupplierRouter;
