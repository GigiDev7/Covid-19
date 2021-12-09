const Country = require('./models/countrySchema');
const mongoose = require('mongoose');
const data = require('./data');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  Country.create(data);
});
