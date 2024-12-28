const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('../api/routes.js'); // Correctly require the routes module


// Middleware to parse JSON (if needed in future)
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Slime Rancher API!');
});

// Use the routes from routes.js
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});