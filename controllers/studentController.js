const mongoose = require("mongoose");
const Student = require("../models/studentModel");

//get all students
const getStudents = async (req, res) => {
  const user_id=req.user._id
  const students = await Student.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(students);
};

//get a single student
const getStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such student" });
  }

  const student = await Student.findById(id);
  if (!student) {
    return res.status(400).json({ error: "No such student" });
  }

  res.status(200).json(student);
};
//update a student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such student" });
  }

  const student = await Student.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!student) {
    return res.status(400).json({ error: "No such student" });
  }
  res.status(200).json(student);
};

//delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such student" });
  }

  const student = await Student.findOneAndDelete(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!student) {
    return res.status(400).json({ error: "No such student" });
  }
  res.status(200).json(student);
};

//create new student
const createStudent = async (req, res) => {
  const {
    fname,
    lname,
    dob,
    gender,
    email,
    parentName,
    parentPhone,
    attendanceM,
    attendanceS,
    attendanceE,
    attendanceGK,
    role,
    location,
  } = req.body;

  //add doc to db
  try {
    const user_id = req.user._id
    const student = await Student.create({
      user_id,
      fname,
      lname,
      dob,
      gender,
      email,
      parentName,
      parentPhone,
      attendanceM,
      attendanceS,
      attendanceE,
      attendanceGK,
      role,
      location,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  createStudent,
};
