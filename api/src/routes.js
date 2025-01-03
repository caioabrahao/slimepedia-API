const express = require('express');
const router = express.Router();

const slimes = require('../data/slimes.json');
const plorts = require('../data/plorts.json');

// 🥚 Slime routes ----------------
router.get('/slimes/count', (req, res) => {
  res.json({ count: slimes.count });
});

router.get('/slimes', (req, res) => {
  res.json(slimes);
});

router.get('/slime', (req, res) => { 
  res.redirect('slimes');   // Redirect 'slime' to 'slimes' (typo safety net)
});

router.get('/slimes/:id', (req, res) => {
  const slimeId = parseInt(req.params.id, 10); // Convert ID to number
  const slime = slimes.results.find(s => s.id === slimeId);
  
  if (slime) {
    res.json(slime);
  } else {
    res.status(404).json({ error: 'Slime not found' });
  }
});

// 💎 Plort routes ----------------
router.get('/plorts', (req, res) => {
  res.json(plorts);
});

router.get('/plorts/:id', (req, res) => {
  const plortId = parseInt(req.params.id, 10); // Convert ID to number
  const plort = plorts.plorts.find(s => s.id === plortId);
  
  if (plort) {
    res.json(plort);
  } else {
    res.status(404).json({ error: 'Plort Data not found' });
  }
});






module.exports = router;