
module.exports = function (req, res, next) {
  // Simple token-based check example; replace with real logic as needed
  const token = req.header('Authorization');
  if (!token || token !== process.env.AUTH_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
