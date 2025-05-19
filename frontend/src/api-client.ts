import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/Signin";
import {
  ParkingSearchResponse,
  ParkingType,
  PaymentIntentResponse,
  UserType,
} from "../../backend/src/shared/types";
import { BookingFormData } from "./forms/BookingForm/BookingForm";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCurrentUser = async (): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};

export const addMyParking = async (parkingFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: parkingFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add Parking");
  }

  return response.json();
};

export const fetchMyParkings = async (): Promise<ParkingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-parkings`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching parkings");
  }

  return response.json();
};

export const fetchMyParkingById = async (parkingId: string): Promise<ParkingType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-parkings/${parkingId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching Parkings");
  }

  return response.json();
};

export const updateMyParkingById = async (parkingFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-parkings/${parkingFormData.get("parkingId")}`,
    {
      method: "PUT",
      body: parkingFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Parking");
  }

  return response.json();
};

export type SearchParams = {
  destination?: string;
  checkInTime?: string;
  checkOutTime?: string;
  slotType?: string;
  page?: string;
  facilities?: string[];
  types?: string[];
  stars?: string[];
  maxPrice?: string;
  sortOption?: string;
};

export const searchParkings = async (
  searchParams: SearchParams
): Promise<ParkingSearchResponse> => {
  const queryParams = new URLSearchParams();
  queryParams.append("destination", searchParams.destination || "");
  queryParams.append("checkIn", searchParams.checkInTime || "");
  queryParams.append("checkOut", searchParams.checkOutTime || "");
  queryParams.append("slotType", searchParams.slotType || "");
  queryParams.append("page", searchParams.page || "");
  queryParams.append("maxPrice", searchParams.maxPrice || "");
  queryParams.append("sortOption", searchParams.sortOption || "");

  searchParams.facilities?.forEach((facility) =>
    queryParams.append("facilities", facility)
  );

  searchParams.types?.forEach((type) => queryParams.append("types", type));
  searchParams.stars?.forEach((star) => queryParams.append("stars", star));

  const response = await fetch(
    `${API_BASE_URL}/api/parkings/search?${queryParams}`
  );

  if (!response.ok) {
    throw new Error("Error fetching parkings");
  }

  return response.json();
};

export const fetchParkings = async (): Promise<ParkingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/parkings`);
  if (!response.ok) {
    throw new Error("Error fetching parkings");
  }
  return response.json();
};

export const fetchParkingById = async (parkingId: string): Promise<ParkingType> => {
  const response = await fetch(`${API_BASE_URL}/api/parkings/${parkingId}`);
  if (!response.ok) {
    throw new Error("Error fetching Parkings");
  }

  return response.json();
};

export const createPaymentIntent = async (
  parkingId: string,
  numberOfHours: string
): Promise<PaymentIntentResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/api/parkings/${parkingId}/bookings/payment-intent`,
    {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ numberOfHours }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching payment intent");
  }

  return response.json();
};

export const createSlotBooking = async (formData: BookingFormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/parkings/${formData.parkingId}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Error booking slot");
  }
};

export const fetchMyBookings = async (): Promise<ParkingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-bookings`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch bookings");
  }

  return response.json();
};