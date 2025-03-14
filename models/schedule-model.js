const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  gameNumber: {},
  hometeam: {},
  awayteam: {},
  time: {},
  day: {},
  gameDate: { type: Date },

  location: {},
  status: {},
  category: {},
});

module.exports = mongoose.model("Schedule", scheduleSchema);
