const express = require("express");
const UserRouter = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { userAuth } = require("../Middleware/userAuth");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/user";
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
const upload = multer({ storage: storage });

const {
  createUser,
  updateUser,
  getUser,
  getAllUser,
  deleteUser,
  updateUserStatus,
  getUserProperties,
  getUserWishList,
  getUserBookings,
  addToWishList,
  removeFromWishList,
} = require("../controllers/UsersModule");

UserRouter.post("/createUser", userAuth, upload.array("image"), createUser);
UserRouter.post("/updateUser", userAuth, upload.array("image"), updateUser);
UserRouter.post("/getUser", userAuth, getUser);
UserRouter.get("/getAllUser", userAuth, getAllUser);
UserRouter.post("/deleteUser", userAuth, deleteUser);
UserRouter.post("/updateUserStatus", userAuth, updateUserStatus);
UserRouter.post("/getUserProperties", userAuth, getUserProperties);
UserRouter.post("/getUserWishList", userAuth, getUserWishList);
UserRouter.post("/getUserBookings", userAuth, getUserBookings);
UserRouter.post("/addToWishList", userAuth, addToWishList);
UserRouter.post("/removeFromWishList", userAuth, removeFromWishList);

module.exports = UserRouter;
