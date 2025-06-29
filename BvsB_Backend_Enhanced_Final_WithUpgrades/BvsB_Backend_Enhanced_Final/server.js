const rateLimit = require('express-rate-limit');

const express = require('express');
const app = express();

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

const PORT = 3000;

app.use(express.json());
app.use('/trade', require('./routes/trade'));
app.use('/deposit', require('./routes/deposit'));
app.use('/withdraw', require('./routes/withdraw'));

app.listen(PORT, () => console.log(`BvsB Backend running on port ${PORT}`));


// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
