const mongoose = require('mongoose');

const structure = new mongoose.Schema({
  Clg_Name: {
    type: String,
    required: true,
    trim: true
  },
  CGPA: {
    type: Number,
    required : true,
    trim: true
  },
  valid: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const task = mongoose.model('task', structure);
module.exports = task;
