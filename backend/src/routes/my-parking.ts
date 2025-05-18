import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Hotel from "../models/parking";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import { ParkingType } from "../shared/types";
import Parking from "../models/parking";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ],
  upload.array("imageFiles", 6),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newParking: ParkingType = req.body;

      const imageUrls = await uploadImages(imageFiles);

      newParking.imageUrls = imageUrls;
      newParking.lastUpdated = new Date();
      newParking.userId = req.userId;

      const parking = new Parking(newParking);
      await parking.save();

      res.status(201).send(parking);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const parkings = await Parking.find({ userId: req.userId });
    res.json(parkings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const parking = await Parking.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(parking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

router.put(
  "/:hotelId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedParking: ParkingType = req.body;
      updatedParking.lastUpdated = new Date();

      const parking = await Parking.findOneAndUpdate(
        {
          _id: req.params.parkingId,
          userId: req.userId,
        },
        updatedParking,
        { new: true }
      );

      if (!parking) {
        return res.status(404).json({ message: "Parking not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      parking.imageUrls = [
        ...updatedImageUrls,
        ...(updatedParking.imageUrls || []),
      ];

      await parking.save();
      res.status(201).json(parking);
    } catch (error) {
      res.status(500).json({ message: "Something went throw" });
    }
  }
);

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default router;