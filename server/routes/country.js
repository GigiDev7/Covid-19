const express = require('express');
const { getAllCountryData } = require('../controllers/country');

const router = express.Router();

router.route('/').get(getAllCountryData);

module.exports = router;
