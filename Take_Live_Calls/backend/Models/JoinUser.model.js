const mongoose = require("mongoose");

const joinuserSchema = new mongoose.Schema({
  eventname: { type: String, require: true },
  description: { type: String, require: true },
  starttime: { type: String, require: true },
  endtime: { type: String, require: true },
  username: { type: String, require: true },
  event_id: { type: String, require: true },
});

const joinuserModel = new mongoose.model("joinuser", joinuserSchema);

module.exports = {
  joinuserModel,
};
