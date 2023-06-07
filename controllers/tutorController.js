const mongoose = require("mongoose");
const Tutor = require("../models/tutorModel");

//get all tutors
const getTutors = async (req, res) => {
  const user_id = req.user._id;
  const tutors = await Tutor.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(tutors);
};

//get a single tutor
const getTutor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such tutor" });
  }

  const tutor = await Tutor.findById(id);
  if (!tutor) {
    return res.status(400).json({ error: "No such tutor" });
  }

  res.status(200).json(tutor);
};
//update a tutor
const updateTutor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such tutor" });
  }

  const tutor = await Tutor.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!tutor) {
    return res.status(400).json({ error: "No such tutor" });
  }
  res.status(200).json(tutor);
};

//delete a tutor
// const deleteTutor = async (req, res) => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ error: "No such tutor" });
//   }

//   const tutor = await Tutor.findOneAndDelete(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );
//   if (!tutor) {
//     return res.status(400).json({ error: "No such tutor" });
//   }
//   res.status(200).json(tutor);
// };

const createTutor = async (req, res) => {
  const {
    name,
    subject,
    rating,
    experience,
    dob,
    gender,
    email,
    role,
    location,
  } = req.body;

  //adding doc to db
  try {
    const user_id = req.user._id;
    const tutor = await Tutor.create({
      user_id,
      name,
      subject,
      rating,
      experience,
      dob,
      gender,
      email,
      role,
      location,
    });
    res.status(200).json(tutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTutor,
  getTutors,
  updateTutor,
  createTutor,
};
