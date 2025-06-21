const express = require('express');
const ensureAuthenticated = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to the protected route!', user: req.user });
});

module.exports = router;
