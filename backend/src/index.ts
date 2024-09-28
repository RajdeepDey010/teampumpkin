import express from 'express';
import connectDB from './config/db';
import router from './features/trip.controller';

const app = express();
app.use(express.json());
connectDB();
app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});