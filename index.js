const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/fitness', require('./routes/fitnessLogs'));
app.use('/api/meals', require('./routes/meals'));
app.use('/api/water', require('./routes/waterIntake'));
app.use('/api/sleep', require('./routes/sleepLogs'));
app.use('/api/mood', require('./routes/moodLogs'));
app.use('/api/goals', require('./routes/goals'));

// Listen
app.listen(3000, () => {
  console.log("Server running on port 3000");
});