const Statistics = require('../models/statisticsSchema');

const filterMiddleware = async (req, res, next) => {
  const { field, sort } = req.query;

  if (!field && !sort) {
    next();
    return;
  }
  if (!field) {
    const data = await Statistics.find().populate('country_id').sort(sort);
    return res.status(200).json(data);
  }
  if (field === 'deaths' || field === 'recovered' || field === 'confirmed') {
    const data = await Statistics.find()
      .populate('country_id')
      .select(field)
      .sort(sort);
    return res.status(200).json(data);
  }
  next();
};

module.exports = filterMiddleware;
