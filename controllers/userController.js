const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "5d" });
};


//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const role=user.role
    const token = createToken(user._id);

    res.status(200).json({email, role, token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup
const signupUser = async (req, res) => {
  const { email, password} = req.body;
  const roleurl=email.split('@')[1].split('.')[0]
  let role=''
  if(roleurl=='learnzy'){
    role='student'
  }
  if(roleurl=='learnzyAdmin'){
    role='admin'
  }
  if(roleurl=='learnzyTutor'){
    role='tutor'
  }

  try {
    const user = await User.signup(email, password, role);

    const token = createToken(user._id);
    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
