import express from 'express';
import { getTripDetails, uploadTrip } from './trip.services';
import { verifyToken } from '../utils/util';

const router = express.Router();

router.post('/trips', verifyToken, uploadTrip);
router.get('/trips/:tripId', verifyToken, getTripDetails);

export default router;