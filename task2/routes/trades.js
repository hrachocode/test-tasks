const express = require('express');
const router = express.Router();
const { createTrade, getTrades, getTradeById, methodNotAllowed } = require('../controllers/trades');

router.post('/', createTrade);
router.get('/', getTrades);
router.get('/:id', getTradeById);
router.all('/:id', methodNotAllowed);

module.exports = router;
