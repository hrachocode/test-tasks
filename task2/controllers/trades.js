const { Trades } = require('../models/trades');

let tradeId = 1;

const createTrade = async (req, res) => {
  const { type, user_id, symbol, shares, price, timestamp } = req.body;

  if (shares < 1 || shares > 100 || (type !== 'buy' && type !== 'sell')) {
    return res.status(400).send('Invalid trade data');
  }

  try {
    const newTrade = await Trades.create({
      id: tradeId++,
      type,
      user_id,
      symbol,
      shares,
      price,
      timestamp
    });
    res.status(201).json(newTrade);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTrades = async (req, res) => {
  const { type, user_id } = req.query;

  let where = {};
  if (type) where.type = type;
  if (user_id) where.user_id = user_id;

  try {
    const trades = await Trades.findAll({ where, order: [['id', 'ASC']] });
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTradeById = async (req, res) => {
  const { id } = req.params;

  try {
    const trade = await Trades.findByPk(id);
    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).send('ID not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const methodNotAllowed = (req, res) => {
  res.status(405).send('Method Not Allowed');
};

module.exports = {
  createTrade,
  getTrades,
  getTradeById,
  methodNotAllowed
};
