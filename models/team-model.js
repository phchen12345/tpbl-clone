const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  teamlogo: {
    type: String,
    required: true,
  },
  playedGame: {
    type: Number,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
  loses: {
    type: Number,
    required: true,
  },
  winRate: {
    type: Number,
  },
  gamesBehind: {
    type: Number,
  },
  streak: {
    type: String,
  },
  matchHistory: [String],
  ticketWeb: {},
});

module.exports = mongoose.model("Team", teamSchema);
