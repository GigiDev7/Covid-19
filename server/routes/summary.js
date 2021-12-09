const express = require('express');
const { getDataSummary } = require('../controllers/summary');

const router = express.Router();

router.route('/').get(getDataSummary);

module.exports = router;
