const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedData) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid token' });
      }
      req.userId = decodedData.id;
      next();
    });
  } catch (error) {
    res.status(400).json({ message: 'Unauthorized' });
  }
};

module.exports = protect;
