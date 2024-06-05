const express = require("express");
const OurTeamRouter = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let fpathId = "uploads/slider";
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

const OurTeamFunc = require("../controllers/OurTeamModule");
const { userAuth, requestAuth } = require("../Middleware/userAuth");
OurTeamRouter.post(
  "/createTeamMember",
  userAuth,
  upload.array("image"),
  OurTeamFunc.createTeam(false)
);
OurTeamRouter.post(
  "/createDirector",
  userAuth,
  upload.array("image"),
  OurTeamFunc.createTeam(true)
);
OurTeamRouter.post("/getTeamList", userAuth, OurTeamFunc.getTeamList(false));
OurTeamRouter.post("/getDirectorList", userAuth, OurTeamFunc.getTeamList(true));
OurTeamRouter.post(
  "/updateTeamMember",
  userAuth,
  upload.array("image"),
  OurTeamFunc.updateTeam
);
OurTeamRouter.post(
  "/updateDirector",
  userAuth,
  upload.array("image"),
  OurTeamFunc.updateTeam
);
OurTeamRouter.post(
  "/updateTeamMemberStatus",
  userAuth,
  OurTeamFunc.updateTeamStatus
);
OurTeamRouter.post(
  "/updateDirectorStatus",
  userAuth,
  OurTeamFunc.updateTeamStatus
);
OurTeamRouter.post("/deleteTeamMember", userAuth, OurTeamFunc.deleteTeam);
OurTeamRouter.post("/deleteDirector", userAuth, OurTeamFunc.deleteTeam);
OurTeamRouter.post(
  "/getTeamMemberDetail",
  userAuth,
  OurTeamFunc.getTeamMember
);
OurTeamRouter.post(
  "/getDirectorDetail",
  userAuth,
  OurTeamFunc.getTeamMember
);
OurTeamRouter.post(
  "/getClientTeamMember",
  requestAuth,
  OurTeamFunc.getTeam(false)
);
OurTeamRouter.post(
  "/getDirector",
  requestAuth,
  OurTeamFunc.getTeam(true)
);

module.exports = OurTeamRouter;
