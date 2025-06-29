const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  direction: String,
  result: String,
  won: Boolean,
  resolved: Boolean,
  createdAt: { type: Date, default: Date.now },
  expiry: Date
});

module.exports = mongoose.model('Trade', tradeSchema);