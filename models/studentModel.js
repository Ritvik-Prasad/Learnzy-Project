const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
        type: String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentPhone: {
        type: Number,
        required: true
    },
    attendanceM: {
        type: Number,
        required: true
    },
    attendanceS: {
        type: Number,
        required: true
    },
    attendanceE: {
        type: Number,
        required: true
    },
    attendanceGK: {
        type: Number,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    location: {
      type: String,
      required: true
    },
    user_id: {
        type: String,
        required: true
    } 

  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
