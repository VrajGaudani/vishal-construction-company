const express = require("express");

const RoleRouter = express.Router();

const UserRoleFunc = require('../controllers/RoleModule')
const { userAuth } = require("../Middleware/userAuth");

  RoleRouter.post(
    "/createUserRole",
    userAuth,
    UserRoleFunc.createUserRole
  );
  RoleRouter.post(
    "/updateStatusUserRole",
    userAuth,
    UserRoleFunc.updateUserRole
  );
  RoleRouter.post(
    "/userRoleList",
    userAuth,
    UserRoleFunc.userRoleList
  );
  RoleRouter.post(
    "/userRoleDetails",
    userAuth,
    UserRoleFunc.userRoleDetails
  );
  RoleRouter.post(
    "/userRoleDelete",
    userAuth,
    UserRoleFunc.userRoleDelete
  );

module.exports = RoleRouter;
