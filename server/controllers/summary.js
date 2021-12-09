const Statistics = require('../models/statisticsSchema');

const helper = (arr) => {
  const newArr = arr.reduce((a, b) => a + b, 0);
  return newArr;
};

const getDataSummary = async (req, res) => {
  try {
    const data = await Statistics.find().select(
      'deaths recovered confirmed -_id'
    );
    const deaths = data.map((item) => item.deaths);
    const recovered = data.map((item) => item.recovered);
    const confirmed = data.map((item) => item.confirmed);

    const sumDeaths = helper(deaths);
    const sumRecovered = helper(recovered);
    const sumConfirmed = helper(confirmed);

    return res.json({
      deaths: sumDeaths,
      recovered: sumRecovered,
      confirmed: sumConfirmed,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getDataSummary,
};
