const express = require("express");
const { eventModel } = require("../Models/Event.model");

const addEvent = async (req, res) => {
  const { eventname, description, starttime, endtime, playerslimit, user_id } =
    req.body;

  try {
    const new_event = new eventModel({
      eventname: eventname,
      description: description,
      starttime: starttime,
      endtime: endtime,
      playerslimit: playerslimit,
      user_id: user_id,
    });

    await new_event.save();
    res.send({ message: "Event added successfully", status: "Success" });
  } catch (err) {
    res.send({ message: "Event added Failed", status: err });
  }
};

const getEvent = async (req, res) => {
  const event = await eventModel.find();
  res.send(event);
};

const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  const singleEvent = await eventModel.findOne({ _id: id });
  res.send(singleEvent);
};

const updateEvent = async (req, res) => {
  const { id } = req.body;
  const patchEvent = await eventModel.findOne({ _id: id });

  if (patchEvent.playerslimit == 0) {
    res.send("All event have been booked");
  } else {
    const updatedData = await eventModel.updateOne(
      { _id: id },
      { $set: { playerslimit: patchEvent.playerslimit - 1 } }
    );
    res.send("Event Join Successfully");
  }
};

module.exports = {
  addEvent,
  getEvent,
  getSingleEvent,
  updateEvent,
};
