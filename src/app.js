const express = require('express');
const app = express();
const PORT = 3000;

const slimes = require('../data/slimes.json');

// Middleware to parse JSON (if needed in future)
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Slime Rancher API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Slime routes

app.get('/slimes/count', (req, res) => {
    res.json({ count: slimes.count });
  });  

app.get('/slimes', (req, res) => {
    res.json(slimes);
  });

  app.get('/slimes/:id', (req, res) => {
    const slimeId = parseInt(req.params.id, 10); // Convert ID to number
    const slime = slimes.slimes.find(s => s.id === slimeId);
  
    if (slime) {
      res.json(slime);
    } else {
      res.status(404).json({ error: 'Slime not found' });
    }
  });
  
