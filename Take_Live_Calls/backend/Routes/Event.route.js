const express = require("express");
const eventRouter = express.Router();
const {
  addEvent,
  getEvent,
  getSingleEvent,
  updateEvent,
} = require("../Controller/Event.controller");
const { addJoinUserEvent } = require("../Controller/JoinUser.controller");
const {
  addNotification,
  getNotification,
} = require("../Controller/Notification.controller");
const { authentication } = require("../Middleware/authenticate");

eventRouter.post("/addevent", authentication, addEvent);
eventRouter.get("/getevent", getEvent);
eventRouter.get("/getsingleevent/:id", getSingleEvent);
eventRouter.patch(
  "/updateevent",
  authentication,
  addNotification,
  addJoinUserEvent,
  updateEvent
);

// eventRouter.patch("/getnotification/:id", getNotification);
eventRouter.get("/getnotification/:id", getNotification);

module.exports = {
  eventRouter,
};
