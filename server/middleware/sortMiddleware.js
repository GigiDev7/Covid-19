const Statistics = require('../models/statisticsSchema');

const helper = async (sortQuery) => {
  const data = await Statistics.find().populate('country_id').sort(sortQuery);
  return data;
};

const sortMiddleware = async (req, res, next) => {
  const { deaths, recovered, confirmed } = req.query;
  if (deaths) {
    const data = await helper(req.query);
    return res.status(200).json(data);
  }
  if (recovered) {
    const data = await helper(req.query);
    return res.status(200).json(data);
  }
  if (confirmed) {
    const data = await helper(req.query);
    return res.status(200).json(data);
  }
  next();
};

module.exports = sortMiddleware;
