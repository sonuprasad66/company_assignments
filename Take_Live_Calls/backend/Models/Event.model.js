const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventname: { type: String, require: true },
  description: { type: String, require: true },
  starttime: { type: String, require: true },
  endtime: { type: String, require: true },
  playerslimit: { type: Number, require: true },
  user_id: { type: String, require: true },
});

const eventModel = new mongoose.model("event", eventSchema);

module.exports = {
  eventModel,
};
