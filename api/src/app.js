const express = require('express');
const app = express();
const routes = require('./routes.js'); // Correctly require the routes module


// Middleware to parse JSON (if needed in future)
app.use(express.json());

// Default route
app.get('/api', (req, res) => {
  res.send('Welcome to the Slime Rancher API!');
});

// Use the routes from routes.js
app.use('/api', routes);

module.exports = app;
