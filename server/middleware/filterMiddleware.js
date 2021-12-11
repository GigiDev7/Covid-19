const Statistics = require('../models/statisticsSchema');

const helper = async (fieldName) => {
  const data = await Statistics.find().populate('country_id').select(fieldName);
  return data;
};

const filterMiddleware = async (req, res, next) => {
  const { field } = req.query;
  if (!field) {
    next();
    return;
  }
  if (field === 'deaths') {
    const data = await helper(field);
    return res.status(200).json(data);
  }
  if (field === 'recovered') {
    const data = await helper(field);
    return res.status(200).json(data);
  }
  if (field === 'confirmed') {
    const data = await helper(field);
    return res.status(200).json(data);
  }
  next();
};

module.exports = filterMiddleware;
