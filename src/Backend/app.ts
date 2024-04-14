import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth-routes";
import donationRoutes from "./modules/donation/donation-routes";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/donation", donationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
