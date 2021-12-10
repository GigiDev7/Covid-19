const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedData) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid token' });
      }
      req.userId = decodedData.id;
      next();
    });
  } else {
    res.status(400).json({ message: 'Unauthorized' });
  }
};

module.exports = protect;
