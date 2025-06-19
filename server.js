const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
app.use(express.json());

const restakerRoutes = require('./routes/restaker.routes');
const validatorRoutes = require('./routes/validator.routes');
const rewardRoutes = require('./routes/reward.routes');

// Connect to DB
connectDB();

// Routes
app.use('/restakers', restakerRoutes);
app.use('/validators', validatorRoutes);
app.use('/rewards', rewardRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
