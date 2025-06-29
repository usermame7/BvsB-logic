const mongoose = require('mongoose');

const withdrawSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  status: { type: String, default: 'pending' },
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Withdraw', withdrawSchema);