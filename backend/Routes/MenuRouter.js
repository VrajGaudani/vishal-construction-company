const express = require("express");
const MenuRouter = express.Router();
const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("file.fieldname  ", file.fieldname);
    console.log(
      "final file name :::   ",
      Date.now() + path.extname(file.originalname)
    );
    req.body.imageFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let upload = multer({ storage: storage });

const { userAuth } = require("../Middleware/userAuth");
const MenuFunc = require("../controllers/MenuModule");
MenuRouter.post("/createMenu", userAuth, MenuFunc.createMenu);
MenuRouter.post("/getMenuList", userAuth, MenuFunc.getMenuList);
MenuRouter.post("/getAllMenuList", userAuth, MenuFunc.getAllMenuList);
MenuRouter.post("/getMenuData", userAuth, MenuFunc.getMenuData);
MenuRouter.post("/updateMenu", userAuth, MenuFunc.updateMenu);
MenuRouter.post("/updateMenuStatus", userAuth, MenuFunc.updateMenuStatus);
MenuRouter.post("/uploadFiles", upload.array("files"), MenuFunc.uploadFiles);

module.exports = MenuRouter;
