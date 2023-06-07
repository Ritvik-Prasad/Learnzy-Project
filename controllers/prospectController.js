const mongoose = require("mongoose");
const Prospect = require("../models/prospectModel");

//get all prospects
const getProspects = async (req, res) => {
  const prospects = await Prospect.find().sort({ createdAt: -1 });
  res.status(200).json(prospects);
};

//create a prospect
const createProspect = async (req, res) => {
  const { name, dob, gender, email, subject, experience, location } = req.body;

  try {
    const prospect = await Prospect.create({
      name,
      dob,
      gender,
      email,
      subject,
      experience,
      location,
    });
    res.status(200).json(prospect);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProspects,
  createProspect,
};
