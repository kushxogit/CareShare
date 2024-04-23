import { Router } from "express";
import * as DonationController from "./donation-controller";
import authenticateToken from "../auth/auth-middleware";

const router = Router();

router.post("/", authenticateToken, DonationController.createDonation);
router.get("/", DonationController.getAllDonations);
router.get("/:id", DonationController.getDonationById);
router.get("/user/:id", DonationController.getAllDonationsForUser);
router.patch(
  "/delete/:id",
  authenticateToken,
  DonationController.softDeleteDonation
);

export default router;
