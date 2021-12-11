const express = require('express');
const { getAllCountryData } = require('../controllers/country');
const filterMiddleware = require('../middleware/filterMiddleware');

const router = express.Router();

router.route('/').get(filterMiddleware, getAllCountryData);

module.exports = router;
