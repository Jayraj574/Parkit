export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type SlotType = {
  _id?: string;
  slotNumber: string;
  type: 'normal' | 'ev';
  isAvailable: boolean;
}

export type BookingType = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  vehicleNumber: string;
  slotType: 'normal' | 'ev';
  checkInTime: Date;
  checkOutTime: Date;
  totalCost: number;
  status: 'booked' | 'ongoing' | 'completed' | 'cancelled';
}

export type ParkingType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  address: string;
  description?: string;
  starRating: number;
  type: 'EV not Availabel' | 'EV Availabel' ;
  facilities: string[];
  pricePerHour: number;
  slots: SlotType[];
  imageUrls: string[];
  lastUpdated: Date;
  bookings: BookingType[];
}

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