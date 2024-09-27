import mongoose, { Schema, Document } from 'mongoose';

interface ITrip extends Document {
  userId: string;
  vehicleId: string;
  startTime: Date;
  endTime: Date;
  gpsData: Array<{ latitude: number, longitude: number, timestamp: Date }>;
  distance: number;
  stoppages: number;
  idling: number;
  overspeedingRoutes: Array<{ latitude: number, longitude: number, timestamp: Date }>;
}

const TripSchema: Schema = new Schema({
  userId: { type: String, required: true },
  vehicleId: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  gpsData: [{
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    timestamp: { type: Date, required: true }
  }],
  distance: { type: Number },
  stoppages: { type: Number },
  idling: { type: Number },
  overspeedingRoutes: [{
    latitude: { type: Number },
    longitude: { type: Number },
    timestamp: { type: Date }
  }]
});

export default mongoose.model<ITrip>('Trip', TripSchema);