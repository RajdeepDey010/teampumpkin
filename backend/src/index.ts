import express from 'express';
import connectDB from './config/db';
import router from './features/trip.controller';

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});