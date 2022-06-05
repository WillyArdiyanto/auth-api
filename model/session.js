const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true
  },
  date: {
    type: Date,
    default: Date.toString,
  },
});

module.exports = mongoose.model("Session", sessionSchema);