const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notification: { type: String, require: true },
  event_id: { type: String, require: true },
  username: { type: String, require: true },
  user_id: { type: String, require: true },
});

const notificationModel = new mongoose.model(
  "notification",
  notificationSchema
);

module.exports = {
  notificationModel,
};
