const express = require('express');
const router = express.Router();

const slimes = require('../data/slimes.json');
const plorts = require('../data/plorts.json');
const ranchers = require('../data/ranchers.json');
const locations = require('../data/locations.json');

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

// 🧑‍🌾 Rancher routes ----------------
router.get('/ranchers', (req, res) => {
  res.json(ranchers);
});

router.get('/ranchers/:id', (req, res) => {
  const rancherId = parseInt(req.params.id, 10);
  const rancher = ranchers.ranchers.find(s => s.id === rancherId);
  
  if (rancher) {
    res.json(rancher);
  } else {
    res.status(404).json({ error: 'Rancher Data not found' });
  }
});

// 🗺️ Location routes ----------------
router.get('/locations', (req, res) => {
  res.json(locations);
});

router.get('/locations/sr1', (req, res) => {
  res.json(locations.sr1);
});
router.get('/locations/sr2', (req, res) => {
  res.json(locations.sr2);
});

router.get('/locations/sr1/:id', (req, res) => {
  const locationId = parseInt(req.params.id, 10);
  const location = locations.sr1.find(s => s.id === locationId);
  
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location Data not found' });
  }
});
router.get('/locations/sr2/:id', (req, res) => {
  const locationId = parseInt(req.params.id, 10);
  const location = locations.sr2.find(s => s.id === locationId);
  
  if (location) {
    res.json(location);
  } else {
    res.status(404).json({ error: 'Location Data not found' });
  }
});
router.get('/locations/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  res.send(`Location query only works with game specification! <br><br> Try /locations/sr1/${id} or /locations/sr2/${id} instead. <br><br><br> For help, refer to our documentation at https://slimepedia-api.vercel.app/`);
});


module.exports = router;