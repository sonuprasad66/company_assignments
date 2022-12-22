const express = require("express");
const { eventModel } = require("../Models/Event.model");
const { userModel } = require("../Models/User.model");
const { notificationModel } = require("../Models/Notification.model");

const addNotification = async (req, res, next) => {
  const { user_id, id } = req.body;
  const event_id = id;
  const { accept } = req.query;
  const { reject } = req.query;
  const user = await userModel.findOne({ _id: user_id });
  const event = await eventModel.findOne({ _id: id });
  if (accept) {
    req.body.id = id;
    req.body.user_id = accept;
    next();
  } else if (reject) {
    const deletenotification = await notificationModel.findOneAndDelete({
      user_id: reject,
    });
    res.send(deletenotification);
  } else {
    const new_notification = new notificationModel({
      notification: `${user.username} want to joined your events`,
      event_id: event_id,
      username: user.username,
      user_id: user_id,
    });
    await new_notification.save();
  }
};

const getNotification = async (req, res) => {
  const { id } = req.params;
  const notification = await notificationModel.find({ event_id: id });
  res.send(notification);
};

module.exports = {
  addNotification,
  getNotification,
};
