const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
  confirmed: {
    type: Number,
  },
  recovered: {
    type: Number,
  },
  deaths: {
    type: Number,
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
  },
});

const Statistics = mongoose.model('statistics', statisticsSchema);

module.exports = Statistics;
