import { Router } from "express";
import * as DonationController from "./donation-controller";
import authenticateToken from "../auth/auth-middleware";

const router = Router();
router.use(authenticateToken);
router.post("/", DonationController.createDonation);
router.get("/", DonationController.getAllDonations);
router.get("/:id", DonationController.getDonationById);
router.get("/user/:id", DonationController.getAllDonationsForUser);
router.patch("/delete/:id", DonationController.softDeleteDonation);

export default router;
