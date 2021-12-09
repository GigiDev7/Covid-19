const cron = require('node-cron');
const mongoose = require('mongoose');
require('dotenv').config();
const axios = require('axios');
const Statistics = require('./models/statisticsSchema');
const Country = require('./models/countrySchema');
const data = require('./data');

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('connected');
});

const codeArray = data.map((item) => item.code);

let index = 0;

cron.schedule('*/10 * * * * *', async function () {
  if (index + 1 <= codeArray.length) {
    const { data } = await axios.post(
      'https://devtest.ge/get-country-statistics',
      {
        code: codeArray[index],
      }
    );
    const country = await Country.findOne({ code: data.code });
    const statistic = await Statistics.create({
      ...data,
      country_id: country._id,
    });
    console.log('1');
    index++;
  }
});
