const Statistics = require('../models/statisticsSchema');
const Country = require('../models/countrySchema');

const getAllCountryData = async (req, res) => {
  try {
    const data = await Statistics.find().populate('country_id');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCountryData,
};
