const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { playerId, toAddress, amount } = req.body;
    // Simulated withdrawal request
    return res.json({ success: true, tx: `tx_hash_for_${playerId}` });
});

module.exports = router;
