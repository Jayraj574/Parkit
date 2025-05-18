export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ParkingType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
  bookings: BookingType[];
};

export type BookingType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  vehicleNumber: string;
  vehicleType: 'car' | 'bike' | 'ev';
  parkingSiteId: string;
  slotId: string;
  slotType: 'normal' | 'ev'; 
  checkInTime: Date;
  checkOutTime: Date;
  totalCost: number;
  status: 'booked' | 'ongoing' | 'completed' | 'cancelled';
};

export type ParkingSearchResponse = {
  data: ParkingType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type PaymentIntentResponse = {
  paymentIntentId: string;
  clientSecret: string;
  totalCost: number;
};