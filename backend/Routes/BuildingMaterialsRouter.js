const express = require("express");
const fs = require("fs");
const BuildingMaterialRouter = express.Router();
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/builder";
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
  createBuilding,
  getBuildingList,
  getBuildingMaterials,
  updateBuilding,
  updateBuildingStatus,
  getBuildingItem,
  deleteBuildingItem,
} = require("../controllers/BuildingMaterialsModule");

BuildingMaterialRouter.post(
  "/createBuilding",
  userAuth,
  upload.array("image"),
  createBuilding
);
BuildingMaterialRouter.get("/getBuildingList", userAuth, getBuildingList);
BuildingMaterialRouter.get(
  "/getBuildingMaterials",
  requestAuth,
  getBuildingMaterials
);
BuildingMaterialRouter.post(
  "/updateBuilding",
  userAuth,
  upload.array("image"),
  updateBuilding
);
BuildingMaterialRouter.post(
  "/updateBuildingStatus",
  userAuth,
  updateBuildingStatus
);
BuildingMaterialRouter.post("/getBuildingItem", userAuth, getBuildingItem);
BuildingMaterialRouter.post(
  "/deleteBuildingItem",
  userAuth,
  deleteBuildingItem
);

module.exports = BuildingMaterialRouter;
