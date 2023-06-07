const mongoose = require("mongoose");
const Admin = require("../models/adminModel");

//get the admin
const getAdmin = async (req, res) => {
  const user_id = req.user._id;
  const admin = await Admin.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(admin);
};

//create the admin
const createAdmin = async (req, res) => {
  const { name, role } = req.body;

  try {
    const user_id = req.user._id;
    const admin = await Admin.create({
      user_id,
      name,
      role,
    });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAdmin,
  createAdmin,
};
