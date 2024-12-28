const express = require('express');
const router = express.Router();
const slimes = require('../data/slimes.json');



// Slime routes
router.get('/slimes/count', (req, res) => {
  res.json({ count: slimes.count });
});

router.get('/slimes', (req, res) => {
  res.json(slimes);
});

router.get('/slimes/:id', (req, res) => {
  const slimeId = parseInt(req.params.id, 10); // Convert ID to number
  const slime = slimes.slimes.find(s => s.id === slimeId);

  if (slime) {
    res.json(slime);
  } else {
    res.status(404).json({ error: 'Slime not found' });
  }
});

module.exports = router;