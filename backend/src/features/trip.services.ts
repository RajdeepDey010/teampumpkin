import { Request, Response } from 'express';
import geolib from 'geolib';
import Trip from '../models/tripModel';

export const uploadTrip = async (req: Request, res: Response) => {
  const { userId, vehicleId, gpsData } = req.body;

  // Calculate distance
  let totalDistance = 0;
  for (let i = 1; i < gpsData.length; i++) {
    const prevCoord = gpsData[i - 1];
    const currCoord = gpsData[i];
    totalDistance += geolib.getDistance(
      { latitude: prevCoord.latitude, longitude: prevCoord.longitude },
      { latitude: currCoord.latitude, longitude: currCoord.longitude }
    );
  }

  // Save trip to the database
  const newTrip = new Trip({
    userId,
    vehicleId,
    gpsData,
    distance: totalDistance,
    stoppages: 0,  // Calculate based on your logic
    idling: 0,  // Calculate based on your logic
    overspeedingRoutes: []  // Add logic for overspeeding detection
  });

  try {
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading trip' });
  }
};

export const getTripDetails = async (req: Request, res: Response) => {
  const { tripId } = req.params;
  try {
    const trip = await Trip.findById(tripId);
    if (!trip) return res.status(404).json({ error: 'Trip not found' });

    res.json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching trip details' });
  }
};