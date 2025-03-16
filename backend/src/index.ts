import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Test Route
app.get("/api/test", async(req: Request, res: Response) => {
  res.json({ message: "Hello, TypeScript + Express!" });
});

// Start Server
app.listen(7000, () => {
  console.log(`🚀 Server running on http://localhost:7000`);
});
