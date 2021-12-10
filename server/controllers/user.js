const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

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

// controllers
const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.create({ email, password });
    const id = newUser._id;
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.status(201).json(newUser);
  } catch (error) {
    const err = handleError(error);
    res.status(400).json(err);
  }
};

const login = async (req, res) => {};

module.exports = {
  signUp,
  login,
};
