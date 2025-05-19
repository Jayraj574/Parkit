import mongoose from "mongoose";
import { BookingType, ParkingType } from "../shared/types";

const slotSchema = new mongoose.Schema({
  slotNumber: { type: String, required: true },
  type: { type: String, enum: ['normal', 'ev'], required: true },
  isAvailable: { type: Boolean, default: true }
});

const bookingSchema = new mongoose.Schema<BookingType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  vehicleType: { type: String, enum: ['car', 'bike', 'ev'], required: true },
  slotNumber: { type: String, required: true },
  slotType: { type: String, enum: ['normal', 'ev'], required: true },
  checkInTime: { type: Date, required: true },
  checkOutTime: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  status: { type: String, enum: ['booked', 'ongoing', 'completed', 'cancelled'], default: 'booked' },
  userId: { type: String, required: true } 
});

const parkingSchema = new mongoose.Schema<ParkingType>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['indoor', 'outdoor', 'basement'], required: true },
  facilities: [{ type: String }],
  pricePerHour: {
    normal: { type: Number, required: true },
    ev: { type: Number, required: true }
  },
  slots: [slotSchema],
  imageUrls: [{ type: String }],
  lastUpdated: { type: Date, default: Date.now },
  bookings: [bookingSchema],
});

const Parking = mongoose.model<ParkingType>("Parking", parkingSchema);
export default Parking;