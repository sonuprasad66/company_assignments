const express = require("express");
const eventRouter = express.Router();
const {
  addEvent,
  getEvent,
  getSingleEvent,
} = require("../Controller/Event.controller");
const { authentication } = require("../Middleware/authenticate");

eventRouter.post("/addevent", authentication, addEvent);
eventRouter.get("/getevent", getEvent);
eventRouter.get("/getsingleevent/:id", getSingleEvent);

module.exports = {
  eventRouter,
};
