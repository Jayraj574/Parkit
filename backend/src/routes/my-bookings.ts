import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Parking from "../models/parking";
import { ParkingType } from "../shared/types";

const router = express.Router();

// /api/my-bookings
router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const parkings = await Parking.find({
      bookings: { $elemMatch: { userId: req.userId } },
    });

    const results = parkings.map((parking) => {
      const userBookings = parking.bookings.filter(
        (booking) => booking.userId === req.userId
      );

      const parkingWithUserBookings: ParkingType = {
        ...parking.toObject(),
        bookings: userBookings,
      };

      return parkingWithUserBookings;
    });

    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch bookings" });
  }
});

export default router;