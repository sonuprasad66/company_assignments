const express = require("express");
const JoinUserRouter = express.Router();
const {
  addJoinUserEvent,
  getJoinUser,
  getJoinCurrentUser,
} = require("../Controller/JoinUser.controller");
const { authentication } = require("../Middleware/authenticate");

JoinUserRouter.post("/addjoinuser", authentication, addJoinUserEvent);
JoinUserRouter.get("/getjoinuser/:id", getJoinUser);
JoinUserRouter.get("/getcurrentjoinuserevent/:username", getJoinCurrentUser);

module.exports = {
  JoinUserRouter,
};
