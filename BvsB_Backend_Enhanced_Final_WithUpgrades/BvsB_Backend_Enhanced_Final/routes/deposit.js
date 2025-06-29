const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();

router.get('/:playerId', (req, res) => {
    const { playerId } = req.params;
    // Simulated deposit address per player
    return res.json({ address: `0xDepositAddressFor-${playerId}` });
});

module.exports = router;
