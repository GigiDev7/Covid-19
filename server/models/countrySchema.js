const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  code: {
    type: String,
  },
  name: {
    en: {
      type: String,
    },
    ka: {
      type: String,
    },
  },
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
