const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// helper for error handling
const handleError = (err) => {
  if (err.code === 11000) {
    return { message: 'Email already exists' };
  }
  if (err.name === 'ValidationError') {
    const paths = Object.entries(err.errors).map((item) => item[0]);
    if (paths.length === 2) {
      return {
        email: 'Please enter valid email',
        password: 'Password must be at least 6 characters',
      };
    }
    if (paths.length < 2 && paths.includes('email')) {
      return { message: 'Please enter valid email' };
    }
    if (paths.length < 2 && paths.includes('password')) {
      return { message: 'Password must be at least 6 characters' };
    }
  }
};

//helper for creating token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};

// controllers
const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.create({ email, password });
    const token = createToken(newUser._id);
    res.status(201).json({ id: newUser._id, email: newUser.email, token });
  } catch (error) {
    const err = handleError(error);
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect email' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
    const token = createToken(user._id);
    res.status(200).json({ id: user._id, email: user.email, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  signUp,
  login,
};
