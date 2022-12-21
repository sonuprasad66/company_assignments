const express = require("express");
const JoinUserRouter = express.Router();
const {
  addJoinUserEvent,
  getJoinUser,
} = require("../Controller/JoinUser.controller");
const { authentication } = require("../Middleware/authenticate");

JoinUserRouter.post("/addjoinuser", authentication, addJoinUserEvent);
JoinUserRouter.get("/getjoinuser/:id", getJoinUser);

module.exports = {
  JoinUserRouter,
};
