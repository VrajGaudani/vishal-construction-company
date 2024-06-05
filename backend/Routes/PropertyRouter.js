const express = require("express");
const PropertyRouter = express.Router();

const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { requestAuth, userAuth } = require("../Middleware/userAuth");
const {
  createPropertyRequest,
  updatePropertyRequest,
  deleteProperty,
  deletePropertyImageRequest,
  propertyDetail,
  getAllPropertyForAdmin,
  getAllProperty,
  getHomeAllProperty,
  getUserIdPropertyList,
  getSearchPropertyList,
  getSearchTerms,
  getPropertyLatLong,
  getSearchMinMax,
  getPropertyByType,
  getPropertyList,
  updatePropertyStatus,
  createExteriorImage,
  updatePrice,
} = require("../controllers/PropertyModule");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(" image data is", req.body);
    let fpathId = "uploads/property/" + req.body.propertyId;
    try {
      if (!fs.existsSync(fpathId)) {
        fs.mkdirSync(fpathId, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    } catch (err) {
      console.error("axios Error ", err);
    }
    cb(null, fpathId);
  },
  filename: (req, file, cb) => {
    req.body.imageFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({ storage: storage });

PropertyRouter.post(
  "/createPropertyRequest",
  requestAuth,
  createPropertyRequest
);
PropertyRouter.post("/updateProperty", userAuth, updatePropertyRequest);
PropertyRouter.post("/deleteProperty", userAuth, deleteProperty);
PropertyRouter.post(
  "/deletePropertyImage",
  userAuth,
  deletePropertyImageRequest
);
PropertyRouter.post("/propertyDetail", requestAuth, propertyDetail);
PropertyRouter.post("/getPropertyDetail", userAuth, propertyDetail);
PropertyRouter.post("/getAllProperty", userAuth, getAllPropertyForAdmin);
PropertyRouter.post("/getAllPropertyForClient", requestAuth, getAllProperty);
PropertyRouter.post("/getAllPropertyForHome", requestAuth, getHomeAllProperty);
PropertyRouter.post("/getPropertyRequest", requestAuth, getPropertyList);
PropertyRouter.post(
  "/updatePropertyStatusRequest",
  userAuth,
  updatePropertyStatus
);
PropertyRouter.post("/uploadImage", upload.array("image"), createExteriorImage);
PropertyRouter.post("/getUserIdPropertyRequest", getUserIdPropertyList);
PropertyRouter.post("/updatePrice", updatePrice);
PropertyRouter.post(
  "/getSearchPropertyList",
  requestAuth,
  getSearchPropertyList
);
PropertyRouter.post("/getSearchTerms", requestAuth, getSearchTerms);
PropertyRouter.post("/getPropertyLatLong", requestAuth, getPropertyLatLong);
PropertyRouter.post("/getSearchMinMax", requestAuth, getSearchMinMax);
PropertyRouter.post("/getPropertyByType", requestAuth, getPropertyByType);

module.exports = PropertyRouter;
