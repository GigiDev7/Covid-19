const express = require('express');
const { getAllCountryData } = require('../controllers/country');
const filterMiddleware = require('../middleware/filterMiddleware');
const sortMiddleware = require('../middleware/sortMiddleware');

const router = express.Router();

router.route('/').get(filterMiddleware, sortMiddleware, getAllCountryData);

module.exports = router;
