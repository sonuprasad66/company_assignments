const express = require("express");
const { eventModel } = require("../Models/Event.model");
const { userModel } = require("../Models/User.model");
const { joinuserModel } = require("../Models/JoinUser.model");

const addJoinUserEvent = async (req, res, next) => {
  const { user_id, id } = req.body;
  const user = await userModel.findOne({ _id: user_id });
  const event = await eventModel.findOne({ _id: id });
  const new_joinevent = new joinuserModel({
    eventname: event.eventname,
    description: event.description,
    starttime: event.starttime,
    endtime: event.endtime,
    username: user.username,
    event_id: id,
  });
  await new_joinevent.save();
  req.body.id = id;
  req.body.user_id = user_id;
  next();
};

const getJoinUser = async (req, res) => {
  const { id } = req.params;
  const joinUser = await joinuserModel.find({ event_id: id });
  res.send(joinUser);
};

const getJoinCurrentUser = async (req, res) => {
  const { username } = req.params;
  const currentUserJoinEvent = await joinuserModel.find({ username: username });
  res.send(currentUserJoinEvent);
};

module.exports = {
  addJoinUserEvent,
  getJoinUser,
  getJoinCurrentUser,
};
